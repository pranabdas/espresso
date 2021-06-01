---
title: Density Functional Theory using Quantum Espresso
sidebar_label: Welcome
slug: /
---
This tutorial is result of my personal notes while trying (which I still do) to
learn Density Functional Theory calculations myself. I am no expert in this
subject. I am sharing this notes here, just in case it helps you getting
started. I will cite numerous other resources that I am following. Hope you will
find this tutorial helpful.

The quantum espresso input files, jupyter notebooks (containing python code for
visualizations), and other source files related to this tutorial can be found on
GitHub: [pranabdas/qe-dft](https://github.com/pranabdas/qe-dft).

## Filename conventions
Lately, I decided to follow specific pattern for the filenames, but you can
choose whatever works best for you. Note that older example files in this
tutorial does not follow this convention.
```
{program}_{calculation}_{system}.{in, out}
{pw, pp, ...}_{scf, bands, ...}_{silicon, ...}.{in, out}
```

Example: *pw_bands_silicon.in* → *input* file for the *bands* calculation using
*PWscf* program for *silicon*.

## Unit conversions

- 1 Bohr = 0.529177249 Å
- 1 Rydberg (Ry) = 13.6056981 eV.
