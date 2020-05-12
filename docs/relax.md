### Cell relaxation 

```
&control
  calculation = 'vc-relax'
  prefix = 'silicon'
  outdir = './tmp/'
  pseudo_dir = '/mnt/d/Pranab/QE/SSSP_efficiency_pseudos/'
  etot_conv_thr = 1e-5
  forc_conv_thr = 1e-4
/

&system
  ibrav=2, celldm(1) =14,
  nat=2, ntyp=1,
  ecutwfc=30
/

&electrons
  conv_thr=1e-7
/

&ions
/

&cell
    cell_dofree='ibrav'
/

ATOMIC_SPECIES
  Si  28.0855  Si.pbe-n-rrkjus_psl.1.0.0.UPF

ATOMIC_POSITIONS (alat)
  Si 0.00 0.00 0.00 0 0 0
  Si 0.25 0.25 0.25 0 0 0

K_POINTS (automatic)
  6 6 6 1 1 1
``` 

This produces following output (see the si.relax.out for more details): 
```
     Final enthalpy =     -22.8384885351 Ry
Begin final coordinates
     new unit-cell volume =    276.21722 a.u.^3 (    40.93117 Ang^3 )
     density =      2.27880 g/cm^3

CELL_PARAMETERS (alat= 14.00000000)
  -0.369214614   0.000000000   0.369214614
   0.000000000   0.369214614   0.369214614
  -0.369214614   0.369214614   0.000000000

ATOMIC_POSITIONS (alat)
Si            0.0000000000        0.0000000000        0.0000000000    0   0   0
Si            0.1846073071        0.1846073071        0.1846073071    0   0   0
```
