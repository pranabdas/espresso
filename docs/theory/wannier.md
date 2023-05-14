---
title: Wannier basis
---

## Introduction

Wannier functions are an alternative representation of Bloch states in terms of
a localized basis set. Suppose we have $N$ atoms each separated by lattice
constant $a$ in one dimension. Bloch states are indexed by the wave vector $k$.

$$
\mathcal{H}\ket{k} = \epsilon_k \ket{k}
$$

$$
\braket{x | k} = \psi_k(x)
$$

From the Bloch theorem, we have

$$
\psi_k(x + a) = e^{ika}\psi_k(x)
$$

Now, we want to find an alternative representation in terms of Wannier basis
$\ket{n}$, where the states are labeled using site index (n = 1, 2, ..., N)
instead of quantum number $k$. Wannier basis set is complete and orthonormal.

$$
\ket{k} = \sum_{n=1}^N a_{nk} \ket{n}
$$

$$
\braket{x | k} = \sum_n a_{nk} \braket{x | n}
$$

$$
\Rightarrow \psi_k(x) = \sum_n a_{nk} w(x - na)
$$

where $w$ represents Wannier function. Apply translation operator on both sides:

$$
\begin{aligned}
&T_a \psi_k(x) = \sum_n a_{nk} T_a w(x - na) \\

\Rightarrow~ & \psi_k(x + a) = \sum_n a_{nk} w\bigl(x - (n-1)a\bigr) \\

\Rightarrow~ & e^{ika} \psi_k(x) = \sum_n a_{(n+1)k} w(x + na) \\

\Rightarrow~ & e^{ika} \sum_n a_{nk} w(x - na) = \sum_n a_{(n+1)k} w(x + na) \\

\Rightarrow~ & e^{ika} \sum_n a_{nk} w(x - na) = \sum_n a_{(n+1)k} w(x + na) \\
\end{aligned}
$$

$$
\begin{aligned}
\therefore ~ a_{(n+1)k} &= a_{nk} e^{ika} \\

&= a_{(n-1)k}e^{i2ka} \\
&\qquad\cdots \\
&= a_{0 k}e^{i(n+1)ka}
\end{aligned}
$$

Since Bloch states are orthonormal:

$$
\begin{aligned}
\braket{k | k} &= \braket{k | \sum_n a_{nk} | n} \\
&= \sum_{mn} \braket{m | a_{mk}^* a_{nk} | n} \\
&= \sum_{n} | a_{nk} |^2 \\
&= N a_{0k}^2 \\
&= 1
\end{aligned}
$$

$$
\Rightarrow a_{0k} = \frac{1}{\sqrt{N}} \qquad\text{(up to a phase factor)}
$$

$$
\ket{k} = \frac{1}{\sqrt{N}} \sum_n e^{ikna} \ket{n}
$$

While Bloch states represent the eigenstates of the single-particle Hamiltonian,
WF (in general) cannot be assigned a single eigen-value, instead WFs are
obtained as liner combination of Bloch states corresponding to different
energies.

The Hamiltonian can now be written as:

$$
\begin{aligned}
\mathcal{H} &= \sum_m \sum_n \ket{m} \braket{m | \mathcal{H} | n} \bra{n} \\
&= \sum_n \epsilon_n \ket{n} \bra{n} + \sum_{m\neq n} (-t_{mn}) \ket{m} \bra{n}
\end{aligned}
$$

where $\epsilon_n$ is onsite or diagonal term and $t_{mn}$ (> 0) is hopping or
off-diagonal term.

## Maximally Localized Wannier Function

The choice of Wannier function is not unique. One such option could be the set
that maximizes localization. Two different sets of Wannier basis are connected
via unitary transformation. MLWFs can be considered as a generalization of
localized molecular orbitals (LMOs) to periodic systems.

## Resources

- [Introduction to Wannier Basis lecture by Vijay A. Singh](https://youtu.be/_XWIwoE7Pc4)
- [*Maximally localized generalized Wannier functions for composite energy bands*, Marzari and Vanderbilt, Phys. Rev. B **56**, 12847 (1997)](https://doi.org/10.1103/PhysRevB.56.12847)
- [*Maximally localized Wannier functions for entangled energy bands*, Souza, Marzari and Vanderbilt, Phys. Rev. B **65**, 035109 (2001)](https://doi.org/10.1103/PhysRevB.65.035109)
- [*Maximally localized Wannier functions: Theory and applications*, Marzari *et. al.*, Rev. Mod. Phys. **84**, 1419 (2012)](https://doi.org/10.1103/RevModPhys.84.1419)
- [*Introduction to Maximally Localized Wannier Functions*, Ambrosetti and Silvestrelli, Reviews in Computational Chemistry, Ch. 6, pp. 327 (2016)](https://doi.org/10.1002/9781119148739.ch6)
