#!/bin/bash
#PBS -q parallel24
#PBS -l select=2:ncpus=24:mpiprocs=24:mem=96GB
#PBS -j eo
#PBS -N qe-project-xx
source /etc/profile.d/rec_modules.sh
module load espresso6.5-intel_18
## module load espresso6.5-Centos6_Intel
cd $PBS_O_WORKDIR;
np=$( cat  ${PBS_NODEFILE} |wc -l );
mpirun -np $np -f ${PBS_NODEFILE} pw.x -inp qe-scf.in > qe-scf.out
