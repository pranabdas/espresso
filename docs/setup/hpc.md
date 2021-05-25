---
title: High Performance Computing
sidebar_label: HPC
---
In order to perform computationally heavy calculations, we would require access
to high performance computing facilities.

## Useful UNIX commands

Connect to a login node via ssh:
```bash
ssh {username}@atlas9.nus.edu.sg
```

Secure copy files between local and remote machines:
```bash
scp {username}@10.10.0.2:/remote/file.txt /local/directory
scp local/file.txt {username}@10.10.0.2:/remote/directory
```

Check disk usage:
```bash
du -hs .
du -hs /path/
```

## Running jobs at NUS HPC

Check your disc quota:
```bash
hpc s
```

List available modules:
```bash
module avail
```

Load a module:
```bash
module load {module-name}
```

Purge loaded modules:
```bash
module purge
```

Quantum Espresso is already installed in NUS HPC clusters. Here is a sample job
script for [NUS HPC](https://nusit.nus.edu.sg/hpc/) clusters:
```bash title="my_sample_job.txt"
#!/bin/bash
#PBS -q parallel12
#PBS -l select=2:ncpus=12:mpiprocs=12:mem=45GB
#PBS -j eo
#PBS -N qe-job
source /etc/profile.d/rec_modules.sh
module load espresso6.5-intel_18
## module load espresso6.5-Centos6_Intel
cd $PBS_O_WORKDIR;
np=$( cat  ${PBS_NODEFILE} |wc -l );
mpirun -np $np -f ${PBS_NODEFILE} pw.x -inp qe-scf.in > qe-scf.out
```

Submitting a job:
```bash
qsub my_sample_job.txt
```

Query about a job:
```bash
qstat -q
```

Details about a job:
```bash
qstat -f {job-id}
```

Stopping a job:
```bash
qdel {job-id}
```

## Resources
- http://bobcat.nus.edu.sg:3080/HPC/pbs/index.html
- https://nusit.nus.edu.sg/services/getting-started/introductory-guide-for-new-hpc-users/
