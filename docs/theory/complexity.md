---
title: Computational complexity
---

Theoretical time scaling of DFT calculation

- **Number of atoms:** CPU time increases as $\mathcal{O}(N^3)$, where $N$ is
number of atoms in the system
- **Number of k-points:** CPU time is proportional to the number if inequivalent
k-points, $\mathcal{O}(N)$
- **Number of plane waves:** CPU time is scales as $\mathcal{O}(N \log N)$ with
the number of plane waves, while number of plane wave is proportional to the
(ecutwfc)<sup>3/2</sup>
- **Subspace diagonalization:** Scales as O(N^3) with the number of bands.
Several different diagonalization algorithms are available; faster methods may
be less stable, so switching to a slower but more robust method is sometimes
necessary for convergence.
