#!/bin/bash
QE_PATH="/workspaces/q-e-qe-7.2/bin"
mpirun -np 4 ${QE_PATH}/pw.x -i pw.scf.CoO.in > pw.scf.CoO.out
mpirun -np 4 ${QE_PATH}/pw.x -i pw.nscf.CoO.in > pw.nscf.CoO.out
mpirun -np 4 ${QE_PATH}/projwfc.x -i projwfc.CoO.in > projwfc.CoO.out
