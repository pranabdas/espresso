---
title: Spin-Orbit Coupling
---

In oder to consider spin orbit coupling effect in our electronic structure
calculation in quantum espresso, we need to use a full relativistic pseudo
potential. Following settings are needed in the `&SYSTEM` card:

```bash
&SYSTEM
    ...
    noncolin = .true.
    lspinorb = .true.
    ...
/
```

## Non collinear spin
In simple spin polarized calculation (`nspin=2`), the spin quantum number (up or
down) is considered in the calculation. In non-collinear case, the spin has more
degrees of freedom, and can be oriented in any direction. Non-collinear
magnetism is quite common in nature, where the spins are not parallel
(ferromagnetic) or anti-parallel (antiferromagnetic), rather they orient in
spirals, helicoids, canted or disordered. Non-collinear magnetism can occur
because of geometric frustration of magnetic interaction. It can also occur due
to the magnetocrystalline anisotropy which is the result of interaction between
the spin and lattice interaction. This relativistic effect comes via spin-orbit
coupling.

We can constrain the magnetic moment:
```bash
&SYSTEM
  ...
  constrained_magnetization = 'atomic direction'
  ...
/
```

Starting magnetization can be specified by `angle1` (angle with $z$ axis) and
`angle2` (angle of projection in $xy$ plane):
```bash
&SYSTEM
  ...
  angle1(i) = 0.0d0
  angle2(i) = 0.0d0
  ...
/
```

`i` is the index of the atom in `ATOMIC_SPECIES` card.


## Strategy for convergence
Spin-orbit coupling calculations are often hard to converge. Use a smaller
`mixing_beta` for such calculations. First perform a collinear calculation with
non-relativistic pseudopotential, and then start from the obtained charge
density to perform non-colinear spin orbit calculation.

```bash
&ELECTRONS
  ...
  mixing_beta = 1.0000000000d-01
  startingpot = 'file'
/
```

Also check the penalty function ($\lambda$):
```bash
&SYSTEM
...
  lambda = 0.5
  lforcet = .true.
/
```

## Bandstructure of Fe with SOC
```bash title="src/fe/pw_scf_fe_soc.in"
&control
   calculation='scf'
   restart_mode='from_scratch',
   pseudo_dir = '../pseudos/',
   outdir='./tmp/'
   prefix='fe'
/

&system
   ibrav = 3,
   celldm(1) =5.39,
   nat= 1,
   ntyp= 1,
   noncolin=.true.,
   lspinorb=.true.,
   starting_magnetization(1)=0.3,
   ecutwfc = 70,
   ecutrho = 850.0,
   occupations='smearing',
   smearing='marzari-vanderbilt',
   degauss=0.02
/

&electrons
   diagonalization='david'
   conv_thr = 1.0e-8
   mixing_beta = 0.7
/

ATOMIC_SPECIES
Fe 55.845 Fe.rel-pbe-spn-rrkjus_psl.1.0.0.UPF

ATOMIC_POSITIONS alat
Fe 0.0 0.0 0.0

K_POINTS AUTOMATIC
14 14 14 1 1 1
```

Run the scf calculation:
```bash
mpirun -np 8 pw.x -i pw_scf_fe_soc.in > pw_scf_fe_soc.out
```

Prepare the input file for `nscf` `bands` calculation:
```bash title="src/fe/pw_bands_fe_soc.in"
&control
   calculation='bands'
   restart_mode='from_scratch',
   pseudo_dir = '../pseudos/',
   outdir='./tmp/'
   prefix='fe'
/

&system
   ibrav = 3,
   celldm(1) =5.39,
   nat= 1, ntyp= 1,
   noncolin=.true.,
   lspinorb=.true.,
   starting_magnetization(1)=0.3,
   ecutwfc = 70,
   ecutrho = 850.0,
   occupations='smearing',
   smearing='marzari-vanderbilt',
   degauss=0.02
/
&electrons
   diagonalization='david'
   conv_thr = 1.0e-8
   mixing_beta = 0.7
/

ATOMIC_SPECIES
Fe 55.845 Fe.rel-pbe-spn-rrkjus_psl.1.0.0.UPF

ATOMIC_POSITIONS alat
Fe 0.0 0.0 0.0

K_POINTS tpiba_b
6
0.000  0.000  0.000  40  !gamma
0.000  1.000  0.000  40  !H
0.500  0.500  0.000  30  !N
0.000  0.000  0.000  30  !gamma
0.500  0.500  0.500  30  !P
0.000  1.000  0.000   1  !H
```

Run the `bands` calculation:
```bash
mpirun -np 8 pw.x -i pw_bands_fe_soc.in > pw_bands_fe_soc.out
```

Finally post process the bandstructure data:
```bash title="src/fe/bands_fe_soc.in"
&BANDS
    outdir='./tmp/',
    prefix='fe',
    filband='fe_bands_soc.dat',
    lsigma(3)=.true.
/
```

In this case `spin_component` has been removed and we add `lsigma(3)=.true.`
that instructs the program to compute the expectation value for the `z`
component of the spin operator for each eigenfunction and save all values in
the file `ni.noncolin.data.3`. All values in this case are either +1/2 or -1/2.

```bash
mpirun -np 8 bands.x -i bands_fe_soc.in > bands_fe_soc.out
```
