---
title: Bandstructure of GaAs
sidebar_label: GaAs
---

Now that we have calculated the bandstructure of silicon (semiconductor) and
aluminum (metal), let us proceed with a compound which has two different atoms.
We follow the steps like before:


First check the lattice constant with cell relaxation according to our chosen
pseudo potential. We use that lattice constant in our next steps.  Our lattice
constant = 10.6867 * 0.508176602 / 0.5 = 10.861462.
```bash
pw.x < GaAs_relax.in > GaAs_relax.out
```

Perform self consistent field calculation:
```bash
pw.x < GaAs_scf.in > GaAs_scf.out
```

Give denser k-points and perform non-self consistent calculation. This step is
only necessary if you need to obtain density of states.
```bash
pw.x < GaAs_nscf.in > GaAs_nscf.out
```

Perform `bands` calculation
```bash
pw.x < GaAs_bands.in > GaAs_bands.out
```

Post process the data and plot the bandstructure.
```bash
bands.x < GaAs_bands_pp.in > GaAs_bands_pp.out
```
If everything goes well, you will get the bandstructure as below:

![GaAs-bandstructure](/img/GaAs-bands.png)

:::caution Warning

Sometimes a calculation with same inputs converges in one computer, while fails
in another due to library configuration or even due to floating point
approximations. The final output numbers will always vary slightly for different
machines, or even among different runs in the same machine. Also check the
Quantum Espresso version for reproducibility.

:::
