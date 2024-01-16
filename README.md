<h1 align="center">Density Functional Theory using Quantum Espresso</h1>

<p align="center">
  <a href="https://github.com/pranabdas/espresso/actions/workflows/deploy-gh-pages.yml"><img src="https://github.com/pranabdas/espresso/actions/workflows/deploy-gh-pages.yml/badge.svg" alt="Deploy gh-pages status"></a>
</p>

This repository contains the various input files and jupyter notebooks (for post
processing and plotting) of the project. Please follow the tutorial at
https://pranabdas.github.io/espresso/


## Quantum ESPRESSO Installer

Pre-built binaries of Quantum ESPRESSO are included in the repository
[releases](https://github.com/pranabdas/espresso/releases) for easy
installation. Currently, only Linux `.deb` packages are provided. Note that
these packages are not well tested. If you find problems, you may open [issues](
https://github.com/pranabdas/espresso/issues).

### Quantum ESPRESSO 7.3

Compiled using GNU libraries with parallel/OpenMPI enabled on a Ubuntu 22.04
system. The package should also work on Debian 11, or any other Linux
distributions based on Ubuntu 22.04 or Debian 11. Other than these operating
systems or versions, it is unlikely to work.

### Installation

Download the package, open a terminal, navigate to the download folder, and run:

```console
sudo apt update && sudo apt install ./quantum-espresso_7.3-1_amd64.deb
```

Upon installation, the executables will be placed under `/opt/espresso/7.3/`.

### Set PATH environment variable

You may add installation path to the `PATH` environment variable in `.bashrc`
(or `.zshrc` depending on the shell you are using) so that you don't have to
type absolute path of the executables. You can do that by:

```console
echo 'export PATH="/opt/espresso/7.3:$PATH"' >> ~/.bashrc
```

Restart your terminal to take effect. Example Quantum ESPRESSO command (run a
`pw.x` calculation using 4 processors):

```console
mpirun -np 4 pw.x -i filename.in > filename.out
```

### Uninstall

```console
sudo apt remove quantum-espresso
sudo apt autoremove --purge
sudo rm -rf /opt/espresso
```

Cleanup `.bashrc`:

```console
sed -i.bak '/^export\sPATH=\"\/opt\/espresso\/7.3:$PATH\"/d' ~/.bashrc
```
