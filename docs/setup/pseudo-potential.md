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
we should choose a full relativistic pseudopotential. We need to be careful
whether our chosen pseudopotential correctly reproduces physical properties.
Various pseudopotential libraries:

- https://www.quantum-espresso.org/pseudopotentials
- https://www.materialscloud.org/discover/sssp/table/efficiency
- http://www.pseudo-dojo.org
- https://www.physics.rutgers.edu/gbrv/
- https://nninc.cnf.cornell.edu
- http://www.quantum-simulation.org/potentials/
- [BLYP pseudopotentials](http://pseudopotentials.quantum-espresso.org/legacy_tables/hartwigesen-goedecker-hutter-pp)
- [SCAN pseudopotentials](https://yaoyi92.github.io/scan-tm-pseudopotentials.html)

Pseudopotential naming conventions in PSLibrary: an example pseudopotential
filename is `O.rel-pbe-n-rrkjus_psl.1.0.0.UPF`.

`O` → denotes the atomic species
`rel` → full relativistic (optional)
`pbe` → exchange correlation functional
`n` → non-linear core correction (optional)
`rrkus` → pseudopotential type

Exchange correlation functionals:

Identifier | Functional
---------- | ----------
pz         | Perdew-Zunger (LDA)
pbe        | Perdew-Burke-Ernzerhof (GGA)
pw91       | Perdew-Wang 91 (GGA)
blyp       | Becke-Lee-Yang-Parr (GGA)

Pseudopotential types:

Identifier | PP types
---------- | --------
ae         | all-electron
rrkj       | Rappe-Rabe-Kaxiras-Joannopoulos (Norm conserving)
rrkjus     | Rappe-Rabe-Kaxiras-Joannopoulos (Ultrasoft)
kjpaw      | Kresse-Joubert (PAW)

Ultra soft pseudopotentials are computationally efficient than the norm
conserving pseudopotentials. You will find the recommended `ecutwfc` in the
header of each pseudopotential file. If you choose an ultra-soft
pseudopotential, you will need `ecutrho` about 8 times the value of `ecutwfc`.
The default `ecutrho` is 4 times `ecutwfc` in Quantum Espresso code, which is a
good choice for norm conserving pseudopotentials. You should check energy
convergence against `ecutwfc` for your system.

By using pseudopotential, we want to get rid of the core electrons that do not
participate in the chemical properties of material. This is known also as rigid
core approximation. Instead of accounting the nucleus and core electrons
separately, we want to have a pseudopotential that interacts in a similar way
with the valence electrons.

:::info

1. We can mix different types of pseudo potentials (e.g., norm conserving,
ultra-soft, or PAW), but we cannot mix different exchange correlation functional
(e.g., PBE and LDA). Exchange correlation functional can be read from the
pseudopotential file or be provided via `input_dft` parameter in Quantum
Espresso.

2. "sol" in PBE-sol stands for solid. For bulk systems PBE-sol should be used,
while PBE is appropriate for molecules. In case of 2D materials generally PBE is
chosen, but one can check PBE-sol.

:::

:::danger Common error

If you mix PBE with PBE-sol type, it results in Error: conflicting values for
igcx. However, it is allowed to mix those two types of pseudo. We can set
desired exchange correlation functional via `input_dft` instead of reading from
the pseudopotential file.

:::

## Resources
- [Naming convention for PP files](
https://www.quantum-espresso.org/pseudopotentials/naming-convention)
