### Orbital weights in the bandstructure 

Here we will try to plot the orbital weights on the bandstructure. We choose aluminum example here. Fist step calculate the self consistent field. 
```
&CONTROL
  calculation= 'scf',
  restart_mode= 'from_scratch',
  prefix= 'al',
  outdir= './tmp/',
  pseudo_dir= './'
/

&SYSTEM
  ibrav= 2,
  celldm(1) = 7.63075,
  nat= 1,
  ntyp= 1,
  ecutwfc= 50,
  ecutrho= 500,
  occupations= 'smearing',
  smearing= 'gaussian',
  degauss= 0.01
/

&ELECTRONS
  conv_thr= 1e-8
/
ATOMIC_SPECIES
  Al 26.981539 Al.pbe-n-rrkjus_psl.1.0.0.UPF
  
ATOMIC_POSITIONS (alat)
  Al 0.00 0.00 0.00

K_POINTS (automatic)
  10 10 10 0 0 0
```
```
$ pw.x -inp al-scf.in > al-scf.out
```

Next we do bands calculation: 
```
&CONTROL
  calculation= 'scf',
  restart_mode= 'from_scratch',
  prefix= 'al',
  outdir= './tmp/',
  pseudo_dir= './'
/

&SYSTEM
  ibrav= 2,
  celldm(1) = 7.63075,
  nat= 1,
  ntyp= 1,
  ecutwfc= 50,
  ecutrho= 500,
  occupations= 'smearing',
  smearing= 'gaussian',
  degauss= 0.01
/

&ELECTRONS
  conv_thr= 1e-8
/
ATOMIC_SPECIES
  Al 26.981539 Al.pbe-n-rrkjus_psl.1.0.0.UPF
  
ATOMIC_POSITIONS (alat)
  Al 0.00 0.00 0.00

K_POINTS {crystal_b}
5
  00.000 0.500 00.000 20  !L
  00.000 0.000 00.000 30  !G
  -0.500 0.000 -0.500 10  !X
  -0.375 0.250 -0.375 30  !U
  00.000 0.000 00.000 20  !G
```
```
$ pw.x -inp al-bands.in > al-bands.out
```

Calculate projections: 
```
&PROJWFC
  prefix = 'al'
  outdir = './tmp/'
  filproj = 'rucl3-projwfc.dat'
/
```
```
$ projwfc.x -inp al-projwfc.in > al-projwfc.out
```
