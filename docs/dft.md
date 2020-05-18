### Density functional theory 

We want to calculate the electronic structure of real material, and their physical properties. Wavefunction of an electron in a potential filed ($v$) is calculated by solving the Schrödinger equation: 

$$ \left[-\frac{\hbar^2 \nabla^2}{2m} + v(\textbf{r})\right] \Psi(\textbf{r}) = \epsilon \Psi(\textbf{r}) $$ 

Once we have the wavefunction, we can calculate the observables by taking the expectation values. However, a real physical system is consists of large number of atoms. The Schrödinger equation becomes coupled many-body equation. With today's available computing power, it is not feasible to solve the actual electronic wavefunction, where $N$ is of the order of $10^{23}$. Density functional theory (DFT) handles this problem by focusing on the electronic density which a function of three spacial coordinates instead of fining the full wave function. DFT tries to minimize the energy of a system (ground state) in a self consistent way, and it is very successful in calculating the electronic structure of solid state systems. 

##### Hohenberg-Kohn Theorem 1 
> The ground state density $n(\textbf{r})$ determines the external potential energy $v(\textbf{r})$ to within a trivial additive constant. 

For non-degenerate ground states, two different Hamiltonian cannot have the same ground-state electron density. It is possible to define the ground-state energy as a function of electronic density. 

##### Hohenberg-Kohn Theorem 2 
> Total energy of the system $E(n)$ is minimal when $n(\textbf{r})$ is the actual ground-state density, among all possible electron densities. 

The ground state energy can therefore be found by minimizing $E(n)$ instead of solving for the many-electron wavefunction. However, note that HK theorems do not tell us how the energy depends on the electron density. In reality, apart form some special cases, the exact $E(n)$ is unknown and only approximate functionals are used. 

##### Kohn-Sham hypothesis 
> For any system of $N$ interacting electrons in a given external potential $v_{ext} (\textbf{r})$, there is a virtual system of $N$ non-interacting electrons with exactly the same density as the interacting one. The non-interacting electrons subjected to a different external (single particle) potential. 

$$ \left[-\frac{\hbar^2 \nabla^2}{2m} + v_s(\textbf{r}) \right] \psi_i(\textbf{r}) = \epsilon_i \psi_i(\textbf{r}) $$ 

$$ v_s(\textbf{r}) = v_{ext}(\textbf{r}) + e^2 \int d^3r' \frac{n(\textbf{r})}{|\textbf{r} - \textbf{r}'|} + v_{xc}(\textbf{r}; [n]) $$

$$ n(\textbf{r}) = \sum_i f_i |\psi_i (\textbf{r})|^2  $$

where $f_i$ is the occupation factor of electrons ($0 \le f_i \le 2$). The KS equation looks like single particle Schrödinger equation, however $e^2 \int d^3r' \frac{n(\textbf{r})}{|\textbf{r} - \textbf{r}'|}$ and $v_{xc}(\textbf{r}; [n])$ terms depend on $n(\textbf{r})$ i.e., on $\psi_i$ which in turn depends on $v_{ext}$. Therefore the problem is non-linear. It is usually solved computationally by starting from a trial potential and iterate to self-consistency. 
