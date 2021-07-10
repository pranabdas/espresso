---
title: Quantum Espresso installation
sidebar_label: Installation
---
We can install Quantum Espresso in our personal laptops or desktops to run
relatively less computationally intensive calculations. If we intend to perform
computationally heavy tasks, we would need access to better computing resources
with large number of CPU (or GPU) cores, memory, bandwidth, and disc IO.

Throughout this tutorial, I will be using a Ubuntu system for smaller
calculations while other computationally intensive calculations will be done in
HPC clusters.

Perhaps the most easiest way to install Quantum Espresso is from the package
manager of respective Linux distribution. This should work fine for us and this
is recommended option. If you are on Ubuntu/ Debian:
```bash
sudo apt install --no-install-recommends \
    libfftw3-dev \
    quantum-espresso
```

If you want to compile from the source yourself, here are the installation steps
for latest version of Quantum Espresso (6.7) in a Ubuntu (LTS 20.04) machine. I
will be compiling for single processor. First install the libraries and
dependencies:

```bash
sudo apt install --no-install-recommends \
    build-essential \
    ca-certificates \
    libblas3 \
    libc6 \
    libfftw3-dev \
    libgcc-s1 \
    gfortran \
    liblapack-dev \
    wget
```

If you want to compile for parallel processing, you need to also install:
```bash
sudo apt install --no-install-recommends \
    libopenmpi-dev \
    libscalapack-openmpi-dev \
    libelpa4
```

[Download](https://github.com/QEF/q-e/releases) Quantum Espresso (latest version
6.7 at the time of writing):
```bash
wget https://github.com/QEF/q-e/releases/download/qe-6.7.0/qe-6.7-ReleasePack.tgz
```

Un-tar the source files in your directory of choice:
```bash
tar -zxvf qe-6.7-ReleasePack.tgz
# delete the archive
rm qe-6.7-ReleasePack.tgz
```

Go to the qe directory and issue configure:
```bash
cd qe-6.7
./configure
```

Here we can provide various configuration options. Read the manual in oder to
properly understand. But in most cases we will be just fine with the defaults,
it should detect the system configuration automatically, in case you don't get
what you want, try the various configuration `flags` with configure.

:::caution

Note that certain programs/utilities bundled with Quantum Espresso might not
work correctly in parallel compilation, so we may need serial compilation for
them by `./configure --disable-parallel` option if parallel option is
automatically detected.

:::

Finally, compile the source files and create the binary executables:
```bash
# compile individual packages
make pw
# or compile everything
make all
# we can parallelize e.g., below command uses 2 CPUs
make -j 2 all
```

Now, the binary files or their symbolic links (shortcuts) would be placed in the
`bin` directory. It would be good idea to include the executable path to your
`.bashrc` (or `.zshrc` or whatever shell you use) file:
```bash
# use the correct path if it differs from mine
echo 'export PATH="/root/qe-6.7/bin:$PATH"' >> ~/.bashrc
```

Finally, you may need to restart your terminal or `source .bashrc`.
```bash
source ~/.bashrc
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

Download the file from - <http://pwtk.ijs.si/download/pwtk-2.0.tar.gz>
```bash
wget "http://pwtk.ijs.si/download/pwtk-2.0.tar.gz"
```

Above command will download and save the file to your current directory. Next we
need to just un-tar (no need to compile):
```bash
tar zxvf pwtk-2.0.tar.gz
```

Add the path (modify below as appropriate) to `.bashrc`:
```bash
echo 'export PATH="/root/pwtk-2.0:$PATH"' >> ~/.bashrc
source ~/.bashrc
```
