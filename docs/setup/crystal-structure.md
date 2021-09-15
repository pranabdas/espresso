---
title: Crystal structure
---
Density functional theory (DFT) calculations are *ab-initio* meaning the
calculation is done from the scratch based on given input parameters. We need to
provide the crystal structure in order to calculate DFT. Crystal structure are
widely available in Crystallographic Information File (`.CIF`) format. There are
several databases where you can find crystal structures.

- [http://crystallography.net/cod/](http://crystallography.net/cod/)
- [https://materialsproject.org](https://materialsproject.org)
- [https://mpds.io/](https://mpds.io/)
- [https://icsd.fiz-karlsruhe.de/index.xhtml](https://icsd.fiz-karlsruhe.de/index.xhtml)
- [http://aflowlib.org/CrystalDatabase/](http://aflowlib.org/CrystalDatabase/)
- [http://crystdb.nims.go.jp/crystdb/search-materials](http://crystdb.nims.go.jp/crystdb/search-materials)

## Various useful tools:
Vesta - [https://jp-minerals.org/vesta/en/](https://jp-minerals.org/vesta/en/)
It helps you explore crystal structure, make structures, super cells and many
more functionality.

We can prepare our Quantum Espresso input file using **cif2cell** utility. If
you do not have **cif2cell** installed, you can use **pip** to install:
```bash
sudo pip3 install cif2cell
```

You may need to add it to the path in your `.bashrc` manually:
```
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
sudo apt install bc
```

You can generate **PWscf** input files using tools in this website as well
<https://www.materialscloud.org/work/tools/qeinputgenerator>

Same website also has a tool for k-path visualization and generation
<https://www.materialscloud.org/work/tools/seekpath>


## Resources
- [Supercell construction using Vesta](https://www.youtube.com/watch?v=Jk0QUB1fkMU)
