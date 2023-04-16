#!/bin/bash
QE_PATH="/workspaces/q-e-qe-7.2/bin"
mpirun -np 4 ${QE_PATH}/pw.x -i pw.scf.GaAs.in > pw.scf.GaAs.out
mpirun -np 4 ${QE_PATH}/ph.x -i ph.GaAs.in > ph.GaAs.out
mpirun -np 4 ${QE_PATH}/q2r.x -i q2r.GaAs.in > q2r.GaAs.out
mpirun -np 4 ${QE_PATH}/matdyn.x -i matdyn.GaAs.in > matdyn.GaAs.out
