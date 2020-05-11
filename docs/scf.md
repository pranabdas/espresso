### Self consistent calculation for silicon

+ Let us create a new directory for our silicon calculations. Go to the directory using terminal.

+ We need to create an input file where we will provide various important parameters for the self consistent calculation. Our input file is [si.scf.in](https://github.com/pranabdas/qe-dft/){:target="_blank"}
```
&control
    calculation = 'scf',
    prefix = 'silicon',
    outdir = './tmp/'
    pseudo_dir = './'
    verbosity = 'high'
 /
&system
    ibrav =  2,
    celldm(1) = 10.26,
    nat =  2,
    ntyp = 1,
    ecutwfc = 25
    nbnd = 8
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
```

+ We will also need the pseudo potential file for silicon. I am using one (Si.pz-vbc.UPF) downloaded from [Quantum Espresso Website](https://www.quantum-espresso.org/pseudopotentials){:target="_blank"}.

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

##### Convergence testing
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
