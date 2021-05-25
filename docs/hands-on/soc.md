---
title: Spin-Orbit Coupling
---

In oder to consider spin orbit coupling effect in our electronic structure
calculation in quantum espresso, we need to use a full relativistic pseudo
potential. Following settings are needed in the `&SYSTEM` card:

```bash
&SYSTEM
    ...
    noncolin = .true.
    lspinorb = .true.
    ...
/
```

## Non collinear spin
In simple spin polarized calculation (`nspin=2`), the spin quantum number (up or
down) is considered in the calculation. In non-collinear case, the spin has more
degrees of freedom, and can be oriented in any direction. Non-collinear
magnetism is quite common in nature, where the spins are not parallel
(ferromagnetic) or anti-parallel (antiferromagnetic), rather they orient in
spirals, helicoids, canted or disordered. Non-collinear magnetism can occur
because of geometric frustration of magnetic interaction. It can also occur due
to the magnetocrystalline anisotropy which is the result of interaction between
the spin and lattice interaction. This relativistic effect comes via spin-orbit
coupling.

## Notes on convergence
Spin-orbit coupling calculations are often hard to converge. Use a smaller
`mixing_beta` for such calculations. First perform a collinear calculation, and
later start from that charge density to perform non-collinear calculation.

```bash
&ELECTRONS
  ...
  mixing_beta = 1.0000000000d-01
  startingpot = 'file'
/
```
