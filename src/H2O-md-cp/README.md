# Molecular Dynamics (using cp.x)

- First run relaxation calculation. We can use either `pw.x` or `cp.x` for this
- Add random displacement.

> [!WARNING]
> `cp.x` exited while using PAW pseudopotential (not implemented), later I switched to USPP (GBRV) pseudopotentials.

```
mpirun -np 4 cp.x -i cp.h2o_rand_disp.in | tee cp.h2o_rand_disp.out
```

- For MD calculation, calculate force and stress for DeePMD. Run md calculation.
```console
mpirun -np 4 cp.x -i cp.md.h2o.in | tee cp.md.h2o.out
```

- Post-processing:

```
gfortran cp2xsf.f90 -o cp2xsf.x

# execute from the outdir of previous calculation
cp2xsf.x < cp2xsf.in > cp2xsf.out
```

The output `.asxf` file can be loaded in Xcrysden for visualization.

Alternatively:
```
cppp.x < cppp.in > cppp.out
```

