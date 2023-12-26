# Molecular Dynamics calculation using pw.x

- First run relaxation calculation:
```console
mpirun -np 4 pw.x -i pw.relax.h2o.in | tee pw.relax.h2o.out
```

- Copy the relaxed structure to md input
- Run md calculation:
```console
mpirun -np 4 pw.x -i pw.md.h2o.in | tee pw.md.h2o.out
```

- Find the temperature variation:

```console
grep temperature pw.md.h2o.out
egrep '^(\s+)?temperature\s+=' pw.md.h2o.out
```

## Pseudopotentials

I used SSSP PBE precision pseudos - https://pseudos.netlify.app
