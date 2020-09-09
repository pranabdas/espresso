### Crystal structure 

Density functional theory (DFT) calculations are *ab-initio* meaning the calculation is done from the scratch based on given input parameters. We need to provide the crystal structure in order to calculate DFT. Crystal structure are widely available in Crystallographic Information File (.CIF) format. There are several databases where you can find crystal structures. 

- [http://crystallography.net/cod/](http://crystallography.net/cod/){:target='_blank'} 
- [https://materialsproject.org](https://materialsproject.org){:target='_blank'} 
- [https://mpds.io/](https://mpds.io/){:target='_blank'} 
- [https://icsd.fiz-karlsruhe.de/index.xhtml](https://icsd.fiz-karlsruhe.de/index.xhtml){:target='_blank'} 
- [http://aflowlib.org/CrystalDatabase/](http://aflowlib.org/CrystalDatabase/){:target='_blank'} 
- [http://crystdb.nims.go.jp/crystdb/search-materials](http://crystdb.nims.go.jp/crystdb/search-materials){:target='_blank'}

##### Various useful tools:
Vesta - [https://jp-minerals.org/vesta/en/](https://jp-minerals.org/vesta/en/){:target='_blank'} It helps you explore crystal structure, make structures, super cells and many more functionality. 

We can prepare our Quantum Espresso input file using *cif2cell* utility. If you do not have *cif2cell* installed, you can use *pip* to install: 
```
sudo pip3 install cif2cell
``` 
later you may need to add it to the path in your *.bashrc* `export PATH="/home/pranab/.local/lib/python3.8/site-packages/:$PATH"`
```
cif2cell file.cif -p quantum-espresso -o inputfile.in
```
You can explore the crystal structure, find out k-path and many more using *Xcrysdens* application - [http://www.xcrysden.org](http://www.xcrysden.org){:target='_blank'} 

You can generate *PWscf* input files using tools in this website as well [https://www.materialscloud.org/work/tools/qeinputgenerator](https://www.materialscloud.org/work/tools/qeinputgenerator){:target="_blank"} 
