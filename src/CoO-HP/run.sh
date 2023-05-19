#!/bin/bash
export PATH="/workspaces/q-e-qe-7.2/bin:$PATH"
mpirun -np 4 pw.x -i pw.scf.CoO.in > pw.scf.CoO.out
mpirun -np 4 hp.x -i hp.CoO.in > hp.CoO.out
mv CoO.Hubbard_parameters.dat CoO.Hubbard_parameters_cycle1.dat
# use newly obtained U value in vc-relax calculation
mpirun -np 4 pw.x -i pw.vc-relax.CoO.in > pw.vc-relax.CoO.out
# use newly obtained CELL_PARAMETERS and U values in next cycle SCF calculation
mpirun -np 4 pw.x -i pw.scf.CoO.cycle2.in > pw.scf.CoO.cycle2.out
mpirun -np 4 hp.x -i hp.CoO.in > hp.CoO.out
mv CoO.Hubbard_parameters.dat CoO.Hubbard_parameters_cycle2.dat
# compare newly obtained Hubbard parameters, if it differs by more than 0.1
# compared to previous step, repeat the steps
mpirun -np 4 pw.x -i pw.vc-relax.CoO.cycle2.in > pw.vc-relax.CoO.cycle2.out
mpirun -np 4 pw.x -i pw.scf.CoO.cycle3.in > pw.scf.CoO.cycle3.out
mpirun -np 4 hp.x -i hp.CoO.in > hp.CoO.out
mv CoO.Hubbard_parameters.dat CoO.Hubbard_parameters_cycle3.dat
mpirun -np 4 pw.x -i pw.vc-relax.CoO.cycle3.in > pw.vc-relax.CoO.cycle3.out
mpirun -np 4 pw.x -i pw.scf.CoO.cycle4.in > pw.scf.CoO.cycle4.out
mpirun -np 4 hp.x -i hp.CoO.in > hp.CoO.out
mv CoO.Hubbard_parameters.dat CoO.Hubbard_parameters_cycle4.dat
