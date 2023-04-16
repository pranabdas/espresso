---
title: Crystal structure
keywords: ["Crystal structure", "Crystal structure visualization", "Vesta", "Finding crystal structure", "cif2cell", "Xcrysdens", "QE input generator", "Supercell construction"]
---

## Structure databases

Density functional theory (DFT) calculations are *ab-initio* meaning the
calculation is done from the scratch based on given input parameters. We need to
provide the crystal structure in order to calculate DFT. Crystal structures are
widely available in Crystallographic Information File (`.CIF`) format. There are
several databases where you can look for crystal structures.

- [http://crystallography.net/cod/](http://crystallography.net/cod/)
- [https://materialsproject.org](https://materialsproject.org)
- [https://mpds.io/](https://mpds.io/)
- [https://icsd.fiz-karlsruhe.de/index.xhtml](https://icsd.fiz-karlsruhe.de/index.xhtml)
- [http://aflowlib.org/CrystalDatabase/](http://aflowlib.org/CrystalDatabase/)
- [http://crystdb.nims.go.jp/crystdb/search-materials](http://crystdb.nims.go.jp/crystdb/search-materials)


In Quantum Espresso, the structure information is provided by `ibrav` number,
and corresponding `celldm` values or lattice constants and cosines of angle
between the axes. It is also possible to set `ibrav=0` and provide lattice
vectors in `CELL_PARAMETERS`.

:::danger

When set `ibrav=0`, the lattice vectors must be provided with sufficiently large
number of decimal accuracy, otherwise symmetry detection may fail and strange
problems may arrise.

:::

`ibrav` numbers for different lattice types:

`ibrav` | Lattice type
------- | ------------
1       | Simple cubic
2       | Face centered cubic
3,-3    | Body centered cubic
4       | Hexagonal
5       | Trigonal with c as 3-fold axis
-5      | Trigonal with <111> as 3-fold axis
6       | Simple tetragonal
7       | Centered tetragonal
8       | Simple orthorhombic
9,-9,91 | One-face centered orthorhombic
10      | Face centered orthorhombic
11      | Body centered orthorhombic
12      | Simple monoclinic, c unique
-12     | Simple monoclinic, b unique
13      | One base centered monoclinic, c unique
-13     | One base centered monoclinic, b unique
14      | Triclinic


## Useful tools:

**Vesta** - [https://jp-minerals.org/vesta/en/](
https://jp-minerals.org/vesta/en/). It helps you visualize crystal structure,
create and modify supercells, crystal structures, and many other useful
functionalities.

We can prepare our Quantum Espresso input file using **cif2cell** utility. If
you do not have **cif2cell** installed, you can use **pip** to install:

```bash
sudo pip3 install cif2cell
```

You may need to add it to the path in your `.bashrc` manually:

```bash
export PATH="/home/pranab/.local/lib/python3.8/site-packages/:$PATH"
```

Running cif2cell command:

```bash
cif2cell file.cif -p quantum-espresso -o inputfile.in
```

### Xcrysdens

You can explore the crystal structure, find out k-path and many more using
**Xcrysdens** application - [http://www.xcrysden.org](http://www.xcrysden.org)

For certain functionality, Xcrysdens requires basic calculator program. On
Ubuntu/ Debian:

```bash
sudo apt update
sudo apt install bc xcrysden
```

Manual installation:

```bash
# install dependencies
sudo apt install --no-install-recommends bc tk libglu1-mesa libtogl2 \
      libfftw3-3 libxmu6 imagemagick openbabel libgfortran5

# download the latest version of xcrysden and extract
wget http://www.xcrysden.org/download/xcrysden-1.6.2-linux_x86_64-shared.tar.gz
tar -zxvf xcrysden-1.6.2-linux_x86_64-shared.tar.gz

# launch (provided you extracted under your home directory)
~/xcrysden-1.6.2-bin-shared/xcrysden
```

If you are on WSL, you need to install X-server (X-ming for Windows) on the host
and set `export DISPLAY=:0` in your WSL instance.

### QE Input generator

You can generate **PWscf** input files using tools in this website as well
<https://www.materialscloud.org/work/tools/qeinputgenerator>

The same website also has a tool for k-path visualization and generation
<https://www.materialscloud.org/work/tools/seekpath>


## Resources

- [Supercell construction using Vesta](https://www.youtube.com/watch?v=Jk0QUB1fkMU)
