---
title: Quantum Espresso installation
sidebar_label: Installation
keywords: ["Quantum Espresso installation", "Installing Quantum Espresso", "PWTK"]
---

We can install Quantum Espresso on our personal laptops or desktops to run
relatively less computationally intensive calculations. If we intend to perform
computationally heavy tasks, we would need access to better computing resources
with large number of CPU (or GPU) cores, memory, bandwidth, and disc IO.

Throughout this tutorial, I will be using a Ubuntu system for smaller
calculations while other computationally intensive calculations will be done in
HPC clusters.

Perhaps the easiest way to install Quantum Espresso is from the package manager
of respective Linux distribution. This should work fine for us and this is
recommended option. Following commands are for Ubuntu/Debian. First make sure
your system is up-to-date.

```bash
sudo apt update && sudo apt upgrade
```

Install Quantum Espresso from apt repository:
```bash
sudo apt install --no-install-recommends \
    libfftw3-dev \
    quantum-espresso
```

:::tip

Pre-built binaries of Quantum ESPRESSO for Ubuntu is included in my GitHub
repository [releases](https://github.com/pranabdas/espresso/releases) for easy
installation. Please refer to the release notes for more details on how to
install.

:::

If you want to compile from the source yourself, here are the installation steps
for the Quantum Espresso version 7.2 in a Ubuntu (LTS 22.04) system. I will be
compiling for single processor. First install the recommended libraries and
dependencies:

```bash
sudo apt install --no-install-recommends \
    autoconf \
    build-essential \
    ca-certificates \
    gfortran \
    libblas3 \
    libc6 \
    libfftw3-dev \
    libgcc-s1 \
    liblapack-dev \
    wget
```

If you want to compile for parallel processing, you also need to install:

```bash
sudo apt install --no-install-recommends \
    libopenmpi-dev \
    libscalapack-openmpi-dev \
    libelpa17  #  use libelpa4 on Ubuntu 20.04
```

[Download](https://gitlab.com/QEF/q-e/-/releases) Quantum Espresso (latest
version 7.2 at the time of writing):

```bash
wget https://gitlab.com/QEF/q-e/-/archive/qe-7.2/q-e-qe-7.2.tar.gz
```

Un-tar the source files:
```bash
tar -zxvf q-e-qe-7.2.tar.gz
```

Go to the qe directory and issue configure:
```bash
cd q-e-qe-7.2
./configure
```

Here we can provide various configuration options. Read the manual in oder to
properly understand. But in most cases we will be just fine with the defaults,
it should detect the system configuration automatically, in case you don't get
what you want, try the various configuration `flags` with configure.

:::caution

Note that certain programs/utilities bundled with Quantum Espresso might not
work correctly in parallel compilation, so we may need serial compilation for
those by `./configure --disable-parallel` option in case parallel option is
automatically detected.

:::

Finally, compile the source files and create the binary executables:

```bash
# compile individual packages
make pw
# or compile everything
make all
# we can parallelize e.g., below command uses 4 CPUs
make -j4 all
```

Now, the binary files or their symbolic links (shortcuts) would be placed in the
`bin` directory. It would be good idea to include the executable path to your
`.bashrc` (or `.zshrc` or whatever shell you use) file:

```bash
# use the correct path if it differs from mine
echo 'export PATH="/root/q-e-qe-7.2/bin:$PATH"' >> ~/.bashrc
```

Finally, you may need to restart your terminal or `source .bashrc`.
```bash
source ~/.bashrc
```

You can compile the documentation by going to particular directory (e.g., PW or
PP) and execute (you need to have LaTeX installed in your system):

```bash
make doc
```

If you want docs in PDF format, you can use `latex` commands to create them as
well:

```bash
pdflatex filename.tex
```

We are now ready to run Quantum Espresso `pw.x` (or any other program) using
`mpirun` by following command:

```bash
pw.x -inp inputfile > outputfile
# For parallel version
mpirun -np 12 pw.x -inp inputfile > outputfile
```
Where `-np 12` specifies the number of processors. `-inp` stands for input file.
Alternatively, we can use `-i`, or `-in`, or `-input`, or even standard input
redirect `<`. But beware some systems may not interpret all the different
options, I think safe option is to use `-i`.

Once installation is completed, optionally we can run tests if everything went
OK. Go to the `test-suite` directory and run

```bash
make run-tests
```
If all is well, we will see **Passed** messages and we are good to go.

:::caution

Note that the above installation steps may not be the most optimal way to run
Quantum Espresso in your computer. There are multiple implementations of same
library. For example, you can replace openmpi libraries with Intel MKL or MPICH
implementations. Please do research yourself or ask help from someone who has
knowledge about high performance computing.

:::

## Installing PWTK
We will install a very hand scripting package PWscf Toolkit (PWTK). First we
need to install following dependencies:

```bash
sudo apt install tcl tcllib
```

Download the file from - http://pwtk.ijs.si/download/pwtk-2.0.tar.gz

```bash
wget "http://pwtk.ijs.si/download/pwtk-2.0.tar.gz"
```

Above command will download and save the file to your current directory. Next we
need to just un-tar (no need to compile):

```bash
tar -zxvf pwtk-2.0.tar.gz
```

Add the path (modify below as appropriate) to `.bashrc`:

```bash
echo 'export PATH="/root/pwtk-2.0:$PATH"' >> ~/.bashrc
source ~/.bashrc
```
