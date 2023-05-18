#!/bin/bash
QE_PATH="/workspaces/q-e-qe-7.2/bin"
mpirun -np 4 ${QE_PATH}/pw.x -i pw.scf.CrO.in > pw.scf.CrO.out
mpirun -np 4 ${QE_PATH}/pw.x -i pw.bands.CrO.in > pw.bands.CrO.out
mpirun -np 4 ${QE_PATH}/bands.x -i pp.bands.CrO.in > pp.bands.CrO.out

mpirun -np 4 ${QE_PATH}/pw.x -i pw.scf.CrO_U.in > pw.scf.CrO_U.out
mpirun -np 4 ${QE_PATH}/pw.x -i pw.bands.CrO_U.in > pw.bands.CrO_U.out
mpirun -np 4 ${QE_PATH}/bands.x -i pp.bands.CrO_U.in > pp.bands.CrO_U.out

mpirun -np 4 ${QE_PATH}/pw.x -i pw.scf.CrO_U_occ.in > pw.scf.CrO_U_occ.out
mpirun -np 4 ${QE_PATH}/pw.x -i pw.bands.CrO_U_occ.in > pw.bands.CrO_U_occ.out
mpirun -np 4 ${QE_PATH}/bands.x -i pp.bands.CrO_U_occ.in > pp.bands.CrO_U_occ.out
