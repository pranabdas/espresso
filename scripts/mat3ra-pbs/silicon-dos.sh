#!/bin/bash
# ----------------------------- CLUSTER CONFIGS ------------------------------ #
#PBS -N Silicon-DOS
#PBS -j oe
#PBS -l nodes=1
#PBS -l ppn=4
#PBS -q OR
#PBS -l walltime=00:00:30:00
#PBS -A seminar-espresso-tutorials
# ----------------------------- SCF CALCULATION ------------------------------ #
# switch to the job working directory
cd $PBS_O_WORKDIR

BASE_URL='https://github.com/pranabdas/espresso/raw/next/src'
IN_FILE='pw.scf.silicon_dos.in'
PP_FILE='Si.pz-vbc.UPF'

# get QE input file
wget ${BASE_URL}/silicon/${IN_FILE} -O ${IN_FILE}

# get pseudopotential file
wget ${BASE_URL}/pseudos/${PP_FILE} -O ${PP_FILE}

# delete pseudo_dir from input file and specify via ENV
sed -i '/^\s*pseudo_dir/d' ${IN_FILE}
export ESPRESSO_PSEUDO='./'

# load required module
module add espresso/63-i-174-impi-044

# run the calculation
mpirun -np $PBS_NP pw.x -in ${IN_FILE} > ${IN_FILE%*.in}.out

# ----------------------------- NSCF CALCULATION ----------------------------- #
IN_FILE='pw.nscf.silicon_dos.in'
wget ${BASE_URL}/silicon/${IN_FILE} -O ${IN_FILE}
sed -i '/^\s*pseudo_dir/d' ${IN_FILE}
mpirun -np $PBS_NP pw.x -in ${IN_FILE} > ${IN_FILE%*.in}.out

# ----------------------------- DOS CALCULATION ------------------------------ #
IN_FILE='pp.dos.silicon.in'
wget ${BASE_URL}/silicon/${IN_FILE} -O ${IN_FILE}
mpirun -np $PBS_NP dos.x -in ${IN_FILE} > ${IN_FILE%*.in}.out

# ----------------------------------- END ------------------------------------ #