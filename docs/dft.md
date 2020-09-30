### Density functional theory 

We want to calculate the electronic structure of real materials, and their physical properties by *ab-initio* method. Electrons are microscopic particle, hence their dynamics is governed by the laws of quantum mechanics. Quantum particles are described by the wave function. 

$$  \lambda \cdot p = h $$

where $h$ is the Plank constant. Wavefunction of an electron in a potential filed ($V$) is calculated by solving the Schrödinger equation: 

$$ -\frac{\hbar^2}{2m} \nabla^2 \Psi(\textbf{r}, t) + V(\textbf{r}, t) = i\hbar \frac{\partial\Psi(\textbf{r}, t)}{\partial t} $$ 

Fortunately, in most practical purposes, the potential field is not a function of time (t), or even if it is a function of time, they changes relatively slowly compared to the dynamics we are interested in. For example, the electrons inside a material are subjected to the Coulomb filed of the nucleus. The nucleus is heavy and their motion is much slower than the motion of the electrons. In such situation, we can separate out the spacial and temporal parts of the wave function:

$$ \Psi(\textbf{r}, t) = \psi(\textbf{r}) f(t) $$ 

Then we have time independent Schrödinger equation: 

$$ \left[-\frac{\hbar^2 \nabla^2}{2m} + v(\textbf{r})\right] \psi(\textbf{r}) = \epsilon \psi(\textbf{r}) $$ 

Once we have the wavefunction, we can calculate the observables by taking the expectation values. 

$$ <\psi_i | \psi_j> = \delta_{ij} $$  

$$ <\psi_i | \hat{H} | \psi_i> = \epsilon_i $$  

However, the challenge is to solve the Schrödinger equation as a real physical system is consists of large number of atoms. The Schrödinger equation becomes coupled many-body equation. 

$$ \left[-\frac{\hbar}{2m} \sum_{i=1}^N \nabla_i^2 + \sum_{i=1}^NV(\textbf{r}_i) + \sum_{i=1}^N \sum_{j<i}U(\textbf{r}_i, \textbf{r}_j)\right]\psi(\textbf{r}_1, \textbf{r}_2, ..., \textbf{r}_N) = E\psi(\textbf{r}_1, \textbf{r}_2, ..., \textbf{r}_N)  $$ 

With today's available computing power, it is far from feasible to solve the actual electronic wavefunction of a condensed matter system, where $N$ is of the order of $10^{23}$. 

Density functional theory (DFT) handles this problem by focusing on the electronic density which a function of three spacial coordinates instead of finding the  wave functions. DFT tries to minimize the energy of a system (ground state) in a self consistent way, and it is very successful in calculating the electronic structure of solid state systems. 

##### Hohenberg-Kohn Theorem 1 
> The ground state density $n(\textbf{r})$ determines the external potential energy $v(\textbf{r})$ to within a trivial additive constant. 

So what Hohenberg-Kohn theorem says, may not sound very trivial. Schrödinger equation says how we can get the wavefunction from a given potential. Then there is the Schrödinger equation, if we can solve it (which could be difficult), we know how to get the density. Now Hohenberg and Kohn says the opposite is also true. For a given density, the potential can be uniquely determined. For non-degenerate ground states, two different Hamiltonian cannot have the same ground-state electron density. It is possible to define the ground-state energy as a function of electronic density. 

##### Hohenberg-Kohn Theorem 2 
> Total energy of the system $E(n)$ is minimal when $n(\textbf{r})$ is the actual ground-state density, among all possible electron densities. 

The ground state energy can therefore be found by minimizing $E(n)$ instead of solving for the many-electron wavefunction. However, note that HK theorems do not tell us how the energy depends on the electron density. In reality, apart form some special cases, the exact $E(n)$ is unknown and only approximate functionals are used. 

##### Kohn-Sham hypothesis 
> For any system of $N$ interacting electrons in a given external potential $v_{ext} (\textbf{r})$, there is a virtual system of $N$ non-interacting electrons with exactly the same density as the interacting one. The non-interacting electrons subjected to a different external (single particle) potential. 

$$ \left[-\frac{\hbar^2 \nabla^2}{2m} + v_s(\textbf{r}) \right] \psi_i(\textbf{r}) = \epsilon_i \psi_i(\textbf{r}) $$ 

$$ v_s(\textbf{r}) = v_{ext}(\textbf{r}) + e^2 \int d^3r' \frac{n(\textbf{r})}{|\textbf{r} - \textbf{r}'|} + v_{xc}(\textbf{r}; [n]) $$

$$ n(\textbf{r}) = \sum_i f_i |\psi_i (\textbf{r})|^2  $$

where $f_i$ is the occupation factor of electrons ($0 \le f_i \le 2$). The KS equation looks like single particle Schrödinger equation, however $e^2 \int d^3r' \frac{n(\textbf{r})}{|\textbf{r} - \textbf{r}'|}$ and $v_{xc}(\textbf{r}; [n])$ terms depend on $n(\textbf{r})$ i.e., on $\psi_i$ which in turn depends on $v_{ext}$. Therefore the problem is non-linear. It is usually solved computationally by starting from a trial potential and iterate to self-consistency. Also note that we have not included the kinetic energy term for the nucleus. This is because the nuclear mass is about three orders of magnitude heavier than the electronic mass (M >> m), so essentially electronic dynamics is much faster than the nuclear dynamics (see Born-Oppenheimer approximation). 

##### Algorithmic implementation

We can write our Schrödinger in Dirac Bra-Ket notation:

$$ \hat{H} | \psi> = E|\psi> $$ 

We start with an initial guess for the electron density $n(\textbf{r})$, and construct a pseudo potential for the nuclear potential. In tern, we have the Hamiltonian. Solve for $\psi_i(\textbf{r})$, subsequently $n(\textbf{r})$, and iterate until self consistency is achieved. 

It is important to note that DFT is calculations are not exact solution to the real systems because exact functional we need to solve the Kohn-Sham equation is not known. Therefore, we have to compare the results with experimental observations. 

##### Plane-wave expansion of wavefunction
Whe wavefunctions are expanded in terms of a basis set:

$$ \psi_i(\textbf{r}) = \sum_{\alpha = 1} ^{N_b} c_{i\alpha} f_{\alpha}(\textbf{r}) $$

Where $N_b$ is the size basis set. Then the eigenvalue equation becomes:

$$  \sum_{\beta} \rm{H}_{\alpha\beta} c_{i\beta} = \epsilon_i c_{i\alpha} $$

$$ \Rightarrow \begin{pmatrix} H_{11} &  ... & H_{1b}\\ ... & ... & ... \\ H_{b1} & ... & H_{bb}\end{pmatrix} \begin{pmatrix}c_1\\...\\c_b \end{pmatrix} = \epsilon_i \begin{pmatrix}c_1\\...\\c_b \end{pmatrix}  $$

This is a linear algebra problem, solving the above involves diagonalization of ($N_b \times N_b$) matrix which gives us corresponding eigenvalue and eigenfunction. 

##### Variational Principle (finding ground state) 

$$ E[\Phi] = \frac{<\Phi | \hat H | \Phi>}{<\Phi|\Phi>} $$

$$  E[\Phi] \ge E_0  $$

##### Bloch theorem for periodic system

$$  \psi_k(r) = e^{i \textbf{k} \cdot \textbf{r}} u_k(\textbf{r})  $$
$$  u_k(\textbf{r}) = u_k(\textbf{r} + \textbf{R})  $$
$\textbf{R}$ is lattice vector. 

Fourier expansion: 

$$ u_k(\textbf{r}) = \frac{1}{\Omega} \sum_G c_{\textbf{k,G}} e^{i \textbf{G} \cdot \textbf{r}}  $$

$\textbf{G}$ is reciprocal lattice vector. 

$$ \psi_k(\textbf{r}) = \frac{1}{\Omega} \sum_G c_{\textbf{k,G}} e^{i (\textbf{k + G}) \cdot \textbf{r}}  $$

Contribution from higher Fourier components are small, we can limit the sum at finite $|\textbf{k + G}|$

$$  \frac{\hbar^2 |\textbf{k + G}|}{2m} \le E_{cutoff}  $$
