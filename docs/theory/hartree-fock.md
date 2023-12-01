---
title: Hartree-Fock Theory
sidebar_label: Hartree-Fock
---

Hatree-Fock theory is foundational to many subsequent electronic structure
theories. It is an independent particle model or mean filed theory. Consider we
have two non-interacting electrons. In that case, the Hamiltonian would be
separable, and the total wavefunction $\Psi(\textbf{r}_1, \textbf{r}_2)$ would
be product of the individual wave function. Now if we consider two electrons are
forming a single system, then there are two issues. (1) We can no longer ignore
the electron-electron interaction. (2) The wavefunction describing fermions must
be antisymmetric with respect to the interchange of any set of space-spin
coordinates. A simple **Hartree product** fails to satisfy that condition:

$$
\Psi_{HP}(\textbf{r}_1, \textbf{r}_2, \cdots, \textbf{r}_N) =
\phi_1(\textbf{r}_1) \phi_2(\textbf{r}_2) \cdots \phi_N(\textbf{r}_N)
$$

In order to satisfy the antisymmetry condition, for our two electron system we
can formulate a total wavefunction of the form:

$$
\Psi(\textbf{r}_1, \textbf{r}_2) = \frac{1}{\sqrt{2}} [\chi_1(\textbf{r}_1)
\chi_2(\textbf{r}_2) - \chi_1(\textbf{r}_2)\chi_2(\textbf{r}_1)]
$$

## Slater determinant

The above equation can be written as:

$$
\Psi(\textbf{r}_1, \textbf{r}_2) = \frac{1}{\sqrt{2}}
\begin{vmatrix}
\chi_1(\textbf{r}_1) & \chi_2(\textbf{r}_1) \\
\chi_1(\textbf{r}_2) & \chi_2(\textbf{r}_2)
\end{vmatrix}
$$

Now what happens if we have more than two electrons? We can generalize the above
determinant form to $N$ electrons:

$$
\Psi = \frac{1}{\sqrt{N!}}
\begin{vmatrix}
\chi_1(\textbf{r}_1) & \chi_2(\textbf{r}_1) & \cdots & \chi_N(\textbf{r}_1) \\
\chi_1(\textbf{r}_2) & \chi_2(\textbf{r}_2) & \cdots & \chi_N(\textbf{r}_2) \\
\vdots & \vdots & \ddots & \vdots \\
\chi_1(\textbf{r}_N) & \chi_2(\textbf{r}_N) & \cdots & \chi_N(\textbf{r}_N)
\end{vmatrix}
$$

The above antisymmetrized product can describe electrons that move independently
of each other while they experience an average (mean-field) Coulomb force.

## Resources
- http://vergil.chemistry.gatech.edu/notes/hf-intro/hf-intro.html
