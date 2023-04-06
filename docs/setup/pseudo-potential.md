---
title: Pseudo potentials
---

In Quantum Espresso, pseudopotential replaces the actual electron-ion
interaction. The pseudopotential describes the atomic nucleus and all the
electrons except the outermost valence shell. The rapidly changing potential
field near the atomic core is replaced by a smoother function that simulates the
potential field far from the core very well. By doing so, it requires less
number plane wave basis for wavefunction expansion.

We can choose form various pseudopotential libraries. Choice of pseudopotential
depends on the problem we are investigating, e.g., if there is a heavy element
present in our system and we are interested in the spin-orbit coupling effects,
we should choose a full relativistic pseudo potential. We need to be careful
whether our chosen pseudo potential correctly reproduces physical properties.
Various pseudopotential libraries:

- <https://www.quantum-espresso.org/pseudopotentials>
- <https://www.materialscloud.org/discover/sssp/table/efficiency>
- <http://www.pseudo-dojo.org>
- <https://www.physics.rutgers.edu/gbrv/>
- <https://nninc.cnf.cornell.edu>

Ultra soft pseudo potentials are computationally efficient than the norm
conserving pseudo potentials. You will find the recommended `ecutwfc` in the
header of each pseudo potential file. If you choose an ultra-soft pseudo
potential, you will need `ecutrho` about 8 times the value of `ecutwfc`. The
default `ecutrho` is 4 times `ecutwfc` in Quantum Espresso code, which is a
good choice for norm conserving pseudo potentials. You should check energy
convergence against `ecutwfc` for your system.

By using pseudo potential, we want to get rid of the core electrons that do not
participate in the chemical properties of material. This is known also as rigid
core approximation. Instead of accounting the nucleus and core electrons
separately, we want to have a pseudo potential that interacts in a similar way
with the valence electrons.

:::info

1. We can mix different types of pseudo potentials (e.g., norm conserving,
ultra-soft, or PAW), but we cannot mix different functional (e.g., PBE and LDA).

2. "sol" in PBE-sol stands for solid. For bulk systems PBE-sol should be used,
while PBE is appropriate for molecules. In case of 2D materials generally PBE is
chosen, but one can check PBE-sol.

:::

:::danger Common error

If you mix PBE with PBE-sol type, it results in Error: conflicting values for
igcx. However, it is allowed to mix those two types of pseudo. We can set
desired exchange functional via `input_dft` instead of reading from the pseudo
potential file.

:::

## Resources
- [Naming convention for PP files](
https://www.quantum-espresso.org/pseudopotentials/naming-convention)
