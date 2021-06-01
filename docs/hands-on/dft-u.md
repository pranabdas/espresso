---
title: DFT+U calculation
---
Electronic structure for transition-metals (with localized $$d$$ or $$f$$
electrons) is not accurately described by standard DFT, and therefore the need
for DFT+U formulation.

```bash
&SYSTEM
    ...
    lda_plus_u = .TRUE.
    Hubbard_u(i) = 2.0
    ...
/
```
Here `i` refers to the atomic index in the `&ATOMIC_SPECIES` card corresponding
to each `ntyp`. We can specify `Hubbard_u(i)` corresponding to more than one
atom in separate lines.

There is also $$U_{eff} = U - J$$ implementation in QE. $$J$$ represents on-site
exchange interaction. Number of $$J$$ terms depends on the manifold of localized
electrons. For $$p$$, we have 1; for $$d$$, we have 2; and for $$f$$, we have 3
terms.

```bash
    ...
    lda_plus_u = .TRUE.
    lda_plus_u_kind = 1
    Hubbard_u(i) = U
    Hubbard_J(k,i) = J_ki
    ...
```

:::danger COMMON ERRORS

If you add `Hubbard_u` for elements that is not implemented to have $$U$$ term
in QE, you might see a "pseudopotential not yet inserted" error.

:::

## DFT calculation for FeO
We will first perform the standard DFT calculation.

1. Perform the SCF calculation:
```bash
pw.x -in feo_scf.in > feo_scf.out
```

2. Perform NSCF calculation with denser k-grid:
```bash
pw.x -in feo_nscf.in > feo_nscf.out
```

3. Perform P-DOS calculation:
```bash
projwfc.x -in feo_projwfc.in > feo_projwfc.out
```
![FeO pdos DFT](../../static/img/feo-pdos-dft.png)

This gives us metallic density of states. In practice we get insulating FeO.

## Calculating Hubbard U
```bash title="src/FeO/feo_hp.in"
&inputhp
   prefix = 'FeO'
   outdir = './tmp/'
   nq1 = 1, nq2 = 1, nq3 = 1
/
```

Perform a linear-response calculation using `hp.x` program:
```bash
hp.x -in feo_hp.in > feo_hp.out
```

Check the file `FeO.Hubbard_parameters.dat`.

## DFT+U calculation
We repeat the calculation after setting in the `&SYSTEM` card:
```bash
Hubbard_U(1) = 4.6
Hubbard_U(2) = 4.6
```

We repeat the above calculation, and plot the results. Now we find insulating
ground state.

![FeO pdos DFT+U](../../static/img/feo-pdos-dft-u.png)
