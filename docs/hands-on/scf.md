---
title: Self consistent field calculation for silicon
sidebar_label: SCF calculation
---

We need to create an input file where we will provide various important
parameters for the self consistent calculation (solves the Kohn-Sham equation
self-consistently). In QE input files, there are `NAMELISTS` and `INPUT_CARDS`.
`NAMELISTS` variables have default values, and should be provided a new value as
required by specific calculation. The variables can be declared in any specific
order. On the other hand, the variables in the `INPUT_CARDS` has always to be
specified and in specific order. Logically independent `INPUT_CARDS` may be
organized in any order.

There are three mandatory `NAMELISTS` in `PWscf`: `&CONTROL` (specifies the flux
of computation), `&SYSTEM` (specifies the system), and `&ELECTRONS` (specifies
the algorithms used to solve the Kohn-Sham equation). There are two other
`NAMELISTS`: `&IONS` and `&CELLS`, which need to be specified depending on the
calculation.

Three `INPUT_CARDS`: `ATOMIC_SPECIES`, `ATOMIC_POSITIONS`, and `K_POINTS` in
`PWscf` are mandatory. There are few others that must be provided in certain
calculations.

Our input file is [si_scf.in](https://github.com/pranabdas/qe-dft/). The input
files are typically named with a prefix `.in`. The inputs are organized as
`&namelists` followed by their fields or cards. The `&control`, `&system`, and
`&electrons` namelists are required. There are also optional `&cell` and
`&ions`, you must provide them if your calculation require them. Most variables
in the namelist have certain default values (which may or may not fit your
needs), however some variables you must always provide. Comment lines can be
added with lines starting with a `!` like in Fortran.

```bash title="src/silicon/si_scf.in"
&CONTROL
! we want to perform self consistent field calculation
  calculation = 'scf',

! prefix is reference to the output files
  prefix = 'silicon',

! output directory. Note that it is deprecated.
  outdir = './tmp/'

! directory for the pseudo potential directory
  pseudo_dir = './'

! verbosity high will give more details on the output file
  verbosity = 'high'
/

&SYSTEM
! Bravais lattice index, which is 2 for FCC structure
  ibrav =  2,

! Lattice constant in BOHR
  celldm(1) = 10.26,

! number of atoms in an unit cell
  nat =  2,

! number of different types of atom in the cell
  ntyp = 1,

! kinetic energy cutoff for wavefunction in Ry
  ecutwfc = 30

! number of bands to calculate
  nbnd = 8
/

&ELECTRONS
! Mixing factor used in the self-consistent method
  mixing_beta = 0.6
/

ATOMIC_SPECIES
  Si 28.086 Si.pz-vbc.UPF

ATOMIC_POSITIONS (alat)
  Si 0.0 0.0 0.0
  Si 0.25 0.25 0.25

K_POINTS (automatic)
  6 6 6 0 0 0
```

1 Bohr = 0.529177249 Å

1 Rydberg (Ry) = 13.6056981 eV

I am using the pseudo potential file (Si.pz-vbc.UPF) downloaded from [Quantum
Espresso Website](https://www.quantum-espresso.org/pseudopotentials).

You must read the **PWscf user manual** for in-depth understanding. Check the
`PW/Doc/` folder under your installation directory. There is also another file
`INPUT_PW.html` regarding the details of input parameters. PW stands for plane
waves.

Run `pw.x` in self consistent mode for silicon.
```bash
pw.x < si_scf.in > si_scf.out
# For parallel execution
mpirun -np 4 pw.x -inp si_scf.in > si_scf.out
```

:::note

Note that I have added the executable path to my bash/zsh profile, otherwise you
have to provide the full path where the `pw.x` executable is located.

:::

Now let’s look at the output file `si_scf.out` and see how the convergence is
reached:
```bash
grep -e 'total energy' -e estimate si_scf.out
```

and you should see something like this:
```fortran
     total energy              =     -15.85014573 Ry
     Harris-Foulkes estimate   =     -15.86899637 Ry
     estimated scf accuracy    <       0.06093037 Ry
     total energy              =     -15.85194177 Ry
     Harris-Foulkes estimate   =     -15.85292281 Ry
     estimated scf accuracy    <       0.00462014 Ry
     total energy              =     -15.85218359 Ry
     Harris-Foulkes estimate   =     -15.85220235 Ry
     estimated scf accuracy    <       0.00011293 Ry
!    total energy              =     -15.85219789 Ry
     Harris-Foulkes estimate   =     -15.85219831 Ry
     estimated scf accuracy    <       0.00000099 Ry
     The total energy is the sum of the following terms:
```

:::info Important

For a set of calculation, we must keep the `prefix` same. For example, the
**nscf** or **bands** calculation uses the wavefunction calculated by the
**scf** calculation. When performing different calculations, for example you
change a parameter and want to see the changes, you must use different output
folder or unique `prefix` for different calculations so that the outputs do not
get mixed.

:::
