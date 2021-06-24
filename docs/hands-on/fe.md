---
title: "Magnetic system: bulk iron"
sidebar_label: Fe (magnetic)
---
I am following this example from the [ICTP online school 2021](
https://gitlab.com/QEF/materials-for-max-qe2021-online-school).

We will perform the SCF KS orbital calculations on magnetic (`nspin=2`) iron.
Since the d-orbitals of Fe atom are localized/ hard, we will use ultra-soft
pseudo potential (USPP).

:::note

If we have crystal structure with only one atom per unit cell, or only one type
of atoms, the only possible ordering is ferromagnetic. In such cases, we need to
form supercell with more number of atoms or label multiple atoms separately, so
that their magnetic orientation could be different thus having the possibility
of ferro- or antiferromagnetic final states.

:::

Run the SCF calculations for both ferro- and antiferromagnetic structures.
Notice that for ferromagnetic, we have BCC structure with only one type of atom,
while we use simple cubic structure for antiferromagnetic case with two
different atomic labels. For antiferromagnetic calculation, we need to start
with opposite initial spins.

```bash
pw.x -i pw.scf.fe_fm.in > pw.scf.fe_fm.out
pw.x -i pw.scf.fe_afm.in > pw.scf.fe_afm.out
```

:::info

In case of ultrasoft pseudo potentials, the Quantum Espresso default of
`ecutrho` 4 times of `ecutoff` is not sufficient. We need to set `ecutrho` 8 or
even 12 times that of `ecutoff`. We must test the convergence for our set
values.

:::

## Convergence test for USPP
Below is the PWTK script file:
```bash title="src/fe/fe_ecut.pwtk"
# load the pw.x input from file
load_fromPWI pw.scf.fe_fm.in

# dual is the ratio ecutrho/ecutwfc
foreach dual { 4 8 12 } {

    set fid [open etot-vs-ecutwfc.dual$dual.dat w]

    foreach ecutwfc [seq 25 5 50] {

        set name pw.Fe.scf.ecutwfc-$ecutwfc.dual-$dual

        SYSTEM "ecutwfc = $ecutwfc
                ecutrho = $ecutwfc*$dual "
        runPW $name.in

        set Etot [pwo_totene $name.out]
        puts $fid "$ecutwfc $Etot"
    }

    close $fid
}
```

Run the script:
```bash
pwtk fe_ecut.pwtk
```

![Fe convergence](/img/fe-convergence.png)

## Density of states calculation

PWTK script to calculate DOS and p-DOS:
```bash
load_fromPWI pw.scf.fe_fm.in

SYSTEM " ecutwfc = 40
         ecutrho = 320 "

set name Fe

runPW pw.$name.scf.in

CONTROL { calculation = 'nscf' }
SYSTEM  { occupations = 'tetrahedra' ,
          degauss = ,  ! this is how variable is unset in PWTK
}
K_POINTS automatic {
    12 12 12   1 1 1
}
runPW pw.$name.nscf.in

DOS "
    fildos = '$name.dos.dat'
    Emin = 5.0
    Emax = 20.0,
    DeltaE = 0.1
"
runDOS dos.$name.in

PROJWFC "
    filpdos = '$name.pdos.dat'
    Emin = 5.0
    Emax = 20.0,
    DeltaE = 0.1
"
runPROJWFC projwfc.$name.in
```

Below is the plots of total and projected density of states.

![density of states](/img/fe-dos.png)

![projected density of states](/img/fe-pdos.png)

Also see bandstructure of Fe with and without [SOC](
soc#bandstructure-of-fe-with-soc).
