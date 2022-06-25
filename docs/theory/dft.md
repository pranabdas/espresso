---
title: Introduction to Density Functional Theory
sidebar_label: DFT overview
---

Density functional theory (DFT) approaches the many-body problem by focusing on
the electronic density which a function of three spacial coordinates instead of
finding the  wave functions. DFT tries to minimize the energy of a system
(ground state) in a self consistent way, and it is very successful in
calculating the electronic structure of solid state systems.

:::info

A functional is a function whose argument is itself a function. $f(x)$ is a
function of the variable $x$ while $F[f]$ is a functional of the function $f$.

$$
y = f(x)
$$

$f$ is a function, it takes a number $x$ as input and output $y$ is also a
number.

$$
y = F[f(x)]
$$

$F$ is a functional it takes function $f(x)$ as input and output $y$ is a
number.

:::

## Hohenberg-Kohn Theorem 1
> The ground state density $$n(\textbf{r})$$ determines the external potential
energy $$v(\textbf{r})$$ to within a trivial additive constant.

So what Hohenberg-Kohn theorem says, may not sound very trivial. Schrödinger
equation says how we can get the wavefunction from a given potential. Then there
is the Schrödinger equation, if we can solve it (which could be difficult), we
know how to get the density. Now Hohenberg and Kohn says the opposite is also
true. For a given density, the potential can be uniquely determined. For
non-degenerate ground states, two different Hamiltonian cannot have the same
ground-state electron density. It is possible to define the ground-state energy
as a function of electronic density.

## Hohenberg-Kohn Theorem 2
> Total energy of the system $E(n)$ is minimal when $n(\textbf{r})$ is the
actual ground-state density, among all possible electron densities.

The ground state energy can therefore be found by minimizing $E(n)$ instead of
solving for the many-electron wavefunction. However, note that HK theorems do
not tell us how the energy depends on the electron density. In reality, apart
form some special cases, the exact $E(n)$ is unknown and only approximate
functionals are used.

## Kohn-Sham hypothesis
> For any system of $N$ interacting electrons in a given external potential
$v_{ext} (\textbf{r})$, there is a virtual system of $N$ non-interacting
electrons with exactly the same density as the interacting one. The
non-interacting electrons subjected to a different external (single particle)
potential.

$$
\left[-\frac{\hbar^2 \nabla^2}{2m} + v_s(\textbf{r}) \right] \psi_i(\textbf{r})
= \epsilon_i \psi_i(\textbf{r})
$$

$$
v_s(\textbf{r}) = v_{ext}(\textbf{r}) + e^2 \int d^3r'
\frac{n(\textbf{r})}{|\textbf{r} - \textbf{r}'|} + v_{xc}(\textbf{r}; [n])
$$

$$
n(\textbf{r}) = \sum_i f_i |\psi_i (\textbf{r})|^2
$$

where $f_i$ is the occupation factor of electrons ($0 \le f_i \le 2$). The
KS equation looks like single particle Schrödinger equation, however $e^2 \int
d^3r' \frac{n(\textbf{r})}{|\textbf{r} - \textbf{r}'|}$ and $v_{xc} (\textbf{r};
[n])$ terms depend on $n(\textbf{r})$ i.e., on $\psi_i$ which in turn depends on
$v_{ext}$. Therefore the problem is non-linear. It is usually solved
computationally by starting from a trial potential and iterate to
self-consistency. Also note that we have not included the kinetic energy term
for the nucleus. This is because the nuclear mass is about three orders of
magnitude heavier than the electronic mass ($M \gg m)$, so essentially
electronic dynamics is much faster than the nuclear dynamics (see
Born-Oppenheimer approximation).


:::info

$v_{ext}(\textbf{r})$ includes the potential energy due to nuclear field, and
external electric and magnetic fields if present.

:::

## Algorithmic implementation

We can write our Schrödinger in Dirac Bra-Ket notation:

$$
\hat{H} \ket{\psi} = E\ket{\psi}
$$

We start with an initial guess for the electron density $n(\textbf{r})$, and
construct a pseudo potential for the nuclear potential. In tern, we have the
Hamiltonian. Solve for $\psi_i(\textbf{r})$, subsequently $n(\textbf{r})$, and
iterate until self consistency is achieved.

<picture>
  <source type="image/webp" srcSet={require("/img/self-consistent-solution.webp").default} />
  <img src={require("/img/self-consistent-solution.png").default} alt="self-consistent-solution" />
</picture>
<p className="fig-caption">Self consistency loop in DFT calculation. The above
screenshot was taken from lecture slide of Professor Ralph Gevauer from {" "}
<a href="http://indico.ictp.it/event/9616/other-view?view=ictptimetable">
ICTP MAX School 2021</a>.</p>

The potential due to the ions is replaced by the pseudo potentials which removes
the oscillations near the atomic core (reducing number of required plane wave
basis vectors) and simulates the exact behavior elsewhere. The pseudo potential
is also different for different exchange correlation functional, and it is
specified in the pseudo potential file. If a system had more than one type of
atom, always choose the pseudo potentials with same exchange correlation (e.g.,
PBE).

It is important to note that DFT is calculations are not exact solution to the
real systems because exact functional ($v_{xc}$) we need to solve the Kohn-Sham
equation is not known. Therefore, we have to compare the results with
experimental observations.

## Plane-wave expansion
The wavefunctions are expanded in terms of a basis set. In quantum espresso, the
the basis function is plane waves. There exists other DFT codes that uses
localized basis function as well. Plane waves are simpler but generally requires
much large number of them compared to other localized basis sets.

$$
\psi_i(\textbf{r}) = \sum_{\alpha = 1} ^{N_b} c_{i\alpha} f_{\alpha}(\textbf{r})
$$

Where $N_b$ is the size basis set. Then the eigenvalue equation becomes:

$$
\sum_{\beta} \rm{H}_{\alpha\beta} c_{i\beta} = \epsilon_i c_{i\alpha}
$$

$$
\Rightarrow
\begin{pmatrix}
H_{11} &  ... & H_{1b} \\
... & ... & ... \\
H_{b1} & ... & H_{bb}
\end{pmatrix}
\begin{pmatrix}
c_1 \\
... \\
c_b
\end{pmatrix}
= \epsilon_i
\begin{pmatrix}
c_1 \\
... \\
c_b
\end{pmatrix}
$$

This is a linear algebra problem, solving the above involves diagonalization of
($N_b \times N_b$) matrix which gives us corresponding eigenvalue and
eigenfunction.

## Variational Principle
Finding the ground state:

$$
E[\Phi] = \frac{\braket{\Phi | \hat H | \Phi}}{\braket{\Phi|\Phi}}
$$

$$
E[\Phi] \ge E_0
$$

## Bloch theorem

$$
\psi_k(r) = e^{i \textbf{k} \cdot \textbf{r}} u_k(\textbf{r})
$$

$$
u_k(\textbf{r}) = u_k(\textbf{r} + \textbf{R})
$$

$$\textbf{R}$$ is lattice vector.

Fourier expansion:

$$
u_k(\textbf{r}) = \frac{1}{\Omega} \sum_G c_{\textbf{k,G}} e^{i \textbf{G} \cdot
\textbf{r}}
$$

$$\textbf{G}$$ is reciprocal lattice vector.

$$
\psi_k(\textbf{r}) = \frac{1}{\Omega} \sum_G c_{\textbf{k,G}}
e^{i (\textbf{k + G}) \cdot \textbf{r}}
$$

Contribution from higher Fourier components are small, we can limit the sum at
finite $|\textbf{k + G}|$

$$
\frac{\hbar^2 |\textbf{k + G}|}{2m} \le E_{cutoff}
$$

The charge density can be obtained from:

$$
n(\textbf{r}) = \sum_k \psi_k^*(\textbf{r}) \psi_k(\textbf{r})
$$

We need two set of basis vectors: one to store the wavefunctions, and another
for the charge density.

:::info

We need about 4 times the cutoff for the charge density compared to the cutoff
for the wavefunction. In case of ultrasoft pseudo potentials, we require lower
cutoff for energy, therefore `ecutrho` might require 8 or 12 times higher than
the `ecutwfc`.

:::

## Resources

- [MIT Course](https://ocw.mit.edu/courses/materials-science-and-engineering/3-320-atomistic-computer-modeling-of-materials-sma-5107-spring-2005/video-lectures/)
- [Quantum Espresso Tutorials](https://www.quantum-espresso.org/resources/tutorials)
- [http://compmatphys.epotentia.com](http://compmatphys.epotentia.com/)
