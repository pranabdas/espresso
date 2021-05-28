---
title: Bandstructure Calculation
sidebar_label: Bandstructure
---

Before we can run `bands` calculation, we need to perform single-point self
consistent field calculation (`scf`). We have our input `scf` file with some new
parameters:

```bash title="src/silicon/si_bands_scf.in"
&CONTROL
  calculation = 'scf',
  restart_mode = 'from_scratch',
  prefix = 'silicon',
  outdir = './tmp/'
  pseudo_dir = './pseudos/'
  verbosity = 'high'
/

&SYSTEM
  ibrav =  2,
  celldm(1) = 10.2076,
  nat =  2,
  ntyp = 1,
  ecutwfc = 50,
  ecutrho = 400,
  nbnd = 8,
/

&ELECTRONS
  conv_thr = 1e-8,
  mixing_beta = 0.6
/

ATOMIC_SPECIES
  Si 28.086 Si.pz-vbc.UPF

ATOMIC_POSITIONS (alat)
  Si 0.0 0.0 0.0
  Si 0.25 0.25 0.25

K_POINTS (automatic)
  8 8 8 0 0 0
```


Run the `scf` calculation:
```bash
pw.x < si_bands_scf.in > si_bands_scf.out
```

Next step is our band calculation (non-self consistent field) calculation. Now
we can specify `nbnd` and denser k-points grid. We create the input file for
band calculation:

```bash title="src/silicon/si_bands.in"
&control
  calculation = 'bands',
  restart_mode = 'from_scratch',
  prefix = 'silicon',
  outdir = './tmp/'
  pseudo_dir = './pseudos/'
  verbosity = 'high'
/

&system
  ibrav =  2,
  celldm(1) = 10.2076,
  nat =  2,
  ntyp = 1,
  ecutwfc = 50,
  ecutrho = 400,
  nbnd = 8
 /

&electrons
  conv_thr = 1e-8,
  mixing_beta = 0.6
 /

ATOMIC_SPECIES
  Si 28.086  Si.pz-vbc.UPF

ATOMIC_POSITIONS (alat)
  Si 0.00 0.00 0.00
  Si 0.25 0.25 0.25

K_POINTS {crystal_b}
5
  0.0000 0.5000 0.0000 20  !L
  0.0000 0.0000 0.0000 30  !G
  -0.500 0.0000 -0.500 10  !X
  -0.375 0.2500 -0.375 30  !U
  0.0000 0.0000 0.0000 20  !G
```

Again run `pw.x` for `bands` calculation:
```bash
pw.x < si_bands.in > si_bands.out
```

The bands are now calculated. We need some post processing in order to obtain
the data in more usable manner. Input file for `bands.x` :
```bash title="src/silicon/si_bands_pp.in"
&BANDS
  prefix = 'silicon'
  outdir = './tmp/'
  filband = 'si_bands.dat'
/
```

Run `bands.x` from post processing (PP) module:
```bash
bands.x < si_bands_pp.in > si_bands_pp.out
```

Next we need to run `plotband.x` We can run is interactively as follows (or you
can provide an input file instead). In oder to run interactively, type
`plotband.x` in your terminal.
```bash
     Input file > si_bands.dat
Reading    8 bands at     91 k-points
Range:   -5.8300   16.3420eV  Emin, Emax > -6, 16
high-symmetry point:  0.5000 0.5000 0.5000   x coordinate   0.0000
high-symmetry point:  0.0000 0.0000 0.0000   x coordinate   0.8660
high-symmetry point:  1.0000 0.0000 0.0000   x coordinate   1.8660
high-symmetry point:  1.0000 0.2500 0.2500   x coordinate   2.2196
high-symmetry point:  0.0000 0.0000 0.0000   x coordinate   3.2802
output file (gnuplot/xmgr) > si_bands.gnuplot
bands in gnuplot/xmgr format written to file si_bands.gnuplot


output file (ps) > si_bands.ps
Efermi > 6.6416
deltaE, reference E (for tics) 4, 0
bands in PostScript format written to file si_bands.ps
```

You will have `si_bands.ps` with band diagram. Or you can use your favorite
plotting program to make plots:
```python title="notebooks/si-bands.ipynb"
import matplotlib.pyplot as plt
from matplotlib import rcParamsDefault
import numpy as np
%matplotlib inline

plt.rcParams["figure.dpi"]=150
plt.rcParams["figure.facecolor"]="white"
plt.rcParams["figure.figsize"]=(8, 6)

# load data
data = np.loadtxt('../src/silicon/si_bands.dat.gnu')

energy = np.unique(data[:, 0])
bands = np.reshape(data[:, 1], (-1, len(energy)))

for band in range(len(bands)):
    plt.plot(energy, bands[band, :], linewidth=1, alpha=0.5, color='k')
plt.xlim(min(energy), max(energy))

# Fermi energy
plt.axhline(6.6416, linestyle=(0, (5, 5)), linewidth=0.75, color='k', alpha=0.5)
# High symmetry k-points (check bands_pp.out)
plt.axvline(0.8660, linewidth=0.75, color='k', alpha=0.5)
plt.axvline(1.8660, linewidth=0.75, color='k', alpha=0.5)
plt.axvline(2.2196, linewidth=0.75, color='k', alpha=0.5)
# text labels
plt.xticks(ticks= [0, 0.8660, 1.8660, 2.2196, 3.2802], \
           labels=['L', '$\Gamma$', 'X', 'U', '$\Gamma$'])
plt.ylabel("Energy (eV)")
plt.text(2.3, 5.6, 'Fermi energy', fontsize= small)
plt.show()
```

![band.png](../../static/img/silicon-bands.png)

:::info

The k values for high symmetry points can be found in the output file
(si_bands_pp.out).

:::
