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

Rsync to synchronize two folders:
```bash
rsync -azhv --delete /source/my_project/ /destination/my_project
```

## Running jobs at NUS HPC

Check your storage quota:
```bash
hpc s
```

PBS commands:
```bash
hpc pbs summary
```

Example scrips for job submissions:
```bash
hpc pbs script parallel20
hpc pbs vasp
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

:::info

Notice that the lines beginning with `#PBS` are actually PBS commands, not
comments. For comments, I am using `##`.

:::

Query about a queue systems:
```bash
qstat -q
```

Check status of a particular queue system:
```bash
qstat -Qx parallel20
```

Submitting a job:
```bash
qsub my_sample_job.txt
```

Check running jobs:
```bash
qstat
```

Details about a job:
```bash
qstat -f {job-id}
```

Stopping a job:
```bash
qdel {job-id}
```

## Abort and restart a calculation

Create an empty file named `{prefix}.EXIT` in the directory where you have the
input file or in the `outdir` as set in the `&CONTROL` card of input file.
```bash
touch {prefix}.EXIT
```

That will stop the program on next iteration, and save the state. In order to
restart, set the `restart_mode` in `&CONTROL` card to `'restart'` and re-run
with necessary changes. You must rerun with same number of processors.

```bash
&CONTROL
  ...
  restart_mode = 'restart'
  ...
/
```

## Resources
- https://nusit.nus.edu.sg/services/getting-started/introductory-guide-for-new-hpc-users/
- https://help.nscc.sg/pbspro-quickstartguide/
