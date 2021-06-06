---
title: Spin polarized bandstructure calculation for nickel
sidebar_label: Ni (spin pol. bands)
---
We prepare the input file `pw_scf_ni.in` and run the calculation:
```bash
mpirun -np 8 pw.x -i pw_scf_ni.in > pw_scf_ni.out
```

Prepare the input file for bands calculation `pw_bands_ni.in` with our desired
k-path and run:
```bash
mpirun -np 8 pw.x -i pw_bands_ni.in > pw_bands_ni.out
```

Now we perform the **bands.x** calculation with `spin_component=1` to process
only the spin up bands:
```bash title="src/ni/bands_ni_spinup.in"
&BANDS
    outdir='./tmp/',
    prefix='ni',
    filband='ni_bands_spinup',
    spin_component = 1,
/
```

Run the calculation:
```bash
mpirun -np 8 bands.x -i bands_ni_up.in > bands_ni_up.out
```
Similarly, we process the spin down bands `spin_component=2` and plot them.

![ni spin polarized bands](../../static/img/ni-spin-bands.png)

