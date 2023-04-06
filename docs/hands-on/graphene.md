---
title: DOS and Bandstructure of Graphene
sidebar_label: Graphene
---

I am following this example from the [ICTP online school 2021](
https://gitlab.com/QEF/materials-for-max-qe2021-online-school).

Graphene is single layer of carbon atoms. First perform the self consistent
field calculation to obtain the Kohn-Sham orbitals. Please check the input files
in [GitHub](https://github.com/pranabdas/espresso/) repository. Run `pw.x`:

```bash
pw.x -i graphene_scf.in > graphene_scf.out
```

Next increase the k-grid, and perform the non-self-consistent field calculation.

```bash
pw.x -i graphene_nscf.in > graphene_nscf.out
```

## DOS calculation

```bash
dos.x -i graphene_dos.in > graphene_dos.out
```

<picture>
  <source type="image/webp" srcSet={require("/img/graphene-dos.webp").default} />
  <img src={require("/img/graphene-dos.png").default} alt="graphene-dos" />
</picture>

## Bandstructure calculation

First run the bands calculation for given k-path:
```bash
pw.x -i graphene_bands.in > graphene_bands.out
```

Followed by the postprocessing to collect the bands:
```bash
bands.x -i graphene_bands_pp.in > graphene_bands_pp.out
```

Make plots:
```python title="notebooks/graphene.ipynb" showLineNumbers
import numpy as np
import matplotlib.pyplot as plt

data = np.loadtxt('../src/graphene/graphene_bands.dat.gnu')

k = np.unique(data[:, 0])
bands = np.reshape(data[:, 1], (-1, len(k)))

for band in range(len(bands)):
    plt.plot(k, bands[band, :], linewidth=1, alpha=0.5, color='k')
plt.xlim(min(k), max(k))

# Fermi energy
plt.axhline(0.921, linestyle=(0, (8, 10)), linewidth=0.75, color='k', alpha=0.5)
# High symmetry k-points (check bands_pp.out)
plt.axvline(0.6667, linewidth=0.75, color='k', alpha=0.5)
plt.axvline(1, linewidth=0.75, color='k', alpha=0.5)
# text labels
plt.xticks(ticks= [0, 0.6667, 1, 1.5774], labels=['$\Gamma$', 'K', 'M', '$\Gamma$'])
plt.ylabel("Energy (eV)")
plt.show()
```

<picture>
  <source type="image/webp" srcSet={require("/img/graphene-bands.webp").default} />
  <img src={require("/img/graphene-bands.png").default} alt="graphene-bands" />
</picture>
