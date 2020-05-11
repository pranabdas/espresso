### Self consistent calculation for silicon

+ Let us create a new directory for our silicon calculations. Go to the directory using terminal.

+ We need to create an input file where we will provide various important parameters for the self consistent calculation. Our input file is [si.scf.in](https://github.com/pranabdas/qe-dft/){:target="_blank"}. The input files are typically named with a prefix `.in`. In inputs are organized as `&namelists` followed by their fields or cards. The `&control`, `&system`, and `&electrons` namelists are required. There are also optional `&cell` and  `&ions`, you must provide them if your calculation require them. Most variables in the namelist have certain default values (which may or may not fit your needs), however some variables you must always provide. Comment lines can be added with lines starting with a `!` like in Fortran. 
```
&CONTROL
! we want to perform self consistent field calculation 
  calculation = 'scf', 

! prefix is reference to the output files. Outputs will be saved in <prefix>.save 
  prefix = 'silicon', 

! output directory. Note that it is deprecated. 
  outdir = './tmp/' 

! directory for the pseudo potential directory 
  pseudo_dir = './' 

! verbosity high will give more details on the output file
  verbosity = 'high'
/

&SYSTEM
! Bravais lattice index, which is 2 for FCC structure
  ibrav =  2, 

! Lattice constant in BOHR 
  celldm(1) = 10.26, 

! number of atoms in an unit cell 
  nat =  2,

! number of different types of atom in the cell 
  ntyp = 1,

! kinetic energy cutoff for wavefunctions in Ry
  ecutwfc = 25 

! number of bands to calculate 
  nbnd = 8
/

&ELECTRONS
  mixing_beta = 0.6
/

ATOMIC_SPECIES
  Si 28.086  Si.pz-vbc.UPF

ATOMIC_POSITIONS (alat)
  Si 0.0 0.0 0.0
  Si 0.25 0.25 0.25

K_POINTS (automatic)
  6 6 6 1 1 1
```

+ I am using the pseudo potential file (Si.pz-vbc.UPF) downloaded from [Quantum Espresso Website](https://www.quantum-espresso.org/pseudopotentials){:target="_blank"}. 

+ You must read the **PWscf user manual** for in-depth understanding. Check the `PW/Doc/` folder under your installation directory. There is also another file `INPUT_PW.html` regarding the details of input parameters. 

+ Run `pw.x` in self consistent mode for silicon. 
```
~/QE/qe-6.5/bin/pw.x < si.scf.in > si.scf.out
```
Note that currently I am in the directory where `si.scf.in` is located. The first path is the path of the executable, where you have installed Quantum Espresso. 

+ Now let’s look at the output file `si.scf.out` and see how the convergence is reached: 
```
grep -e 'total energy' -e estimate si.scf.out
```
and you should see something like this: 
```
$ grep -e 'total energy' -e estimate si.scf.out
total energy              =     -15.84919929 Ry
Harris-Foulkes estimate   =     -15.86803778 Ry
estimated scf accuracy    <       0.06085067 Ry
total energy              =     -15.85098989 Ry
Harris-Foulkes estimate   =     -15.85196978 Ry
estimated scf accuracy    <       0.00461281 Ry
total energy              =     -15.85122603 Ry
Harris-Foulkes estimate   =     -15.85124499 Ry
estimated scf accuracy    <       0.00011255 Ry
!    total energy              =     -15.85123897 Ry
Harris-Foulkes estimate   =     -15.85123936 Ry
estimated scf accuracy    <       0.00000086 Ry
The total energy is the sum of the following terms:
```

#### Convergence testing using `pwtk` 
We can automate the above self consistent calculation by varying a certain parameter. Say we want to check the total energy of the system for various values of `ecutwfc`. We can do that by using `pwtk` script. 
``` 
# load the pw.x input from file
load_fromPWI si.scf.in

# open a file for writing resulting total energies
set fid [open Etot-vs-ecutwfc.dat w]

# loop over different "ecut" values
foreach ecut { 12 16 20 24 28 32 } {

    # name of I/O files: $name.in & $name.out
    set name pw.Si.scf.ecutwfc-$ecut

    # set the pw.x "ecutwfc" variable
    SYSTEM "ecutwfc = $ecut"

    # run the pw.x calculation
    runPW $name.in

    # extract the "total energy" and write it to file
    set Etot [::pwtk::pwo::totene $name.out]
    puts $fid "$ecut $Etot"
} 

close $fid

``` 
To run the above script: 
```
pwtk ecutwfc.pwtk
```

#### Convergence testing using UNIX shell script 
+ We can do the convergence test with various parameters. We can calculate the total energy of the system by varying various parameters. We will use the shell script ([si.script.sh](https://github.com/pranabdas/qe-dft/){:target="_blank"}) to automate the process with different cutoff energy values. `./si.script.sh`
```
#!/bin/sh

NAME="ecut"

for CUTOFF in  10 15 20 25 30 35 40
do
cat > ${NAME}_${CUTOFF}.in << EOF
&control
calculation = 'scf',
prefix = 'silicon'
outdir = './tmp/'
pseudo_dir = '/Users/Pranab/Dropbox/Shared/NUS_PC/DFT/Projects/Si/'
/
&system
ibrav =  2,
celldm(1) = 10.0,
nat =  2,
ntyp = 1,
ecutwfc = $CUTOFF
/
&electrons
mixing_beta = 0.6
/

ATOMIC_SPECIES
 Si 28.086  Si.pz-vbc.UPF

ATOMIC_POSITIONS (alat)
 Si 0.0 0.0 0.0
 Si 0.25 0.25 0.25

K_POINTS (automatic)
  6 6 6 1 1 1
EOF

~/qe/qe-6.5/bin/pw.x < ${NAME}_${CUTOFF}.in > ${NAME}_${CUTOFF}.out
echo ${NAME}_${CUTOFF}
grep ! ${NAME}_${CUTOFF}.out

done
``` 

+ We can plot the energy vs cut off energy, and choose a reasonable value. 

**Note:** I had initially problem is running the script in macOS. The problem was the script file format was set to DOS. The file format of a script (.sh) file could be checked in the following way:  
Open the file in **vi** editor. `vi si.script.sh` Now in **vi** editor command mode (ESC key), type `:set ff?` This would tell you the file format. Now to change file format, use the  command `:set fileformat=unix`
