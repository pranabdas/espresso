---
title: DFT+U calculation
---
```bash
&SYSTEM
    ...
    lda_plus_u = .TRUE.
    Hubbard_u(i) = 2.0
    ...
/
```
Here `i` refers to the atomic index in the `&ATOMIC_SPECIES` card corresponding
to each `ntyp`. We can specify `Hubbard_u(i)` corresponding to more than one
atom in separate lines.
