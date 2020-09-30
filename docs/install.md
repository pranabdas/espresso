### Installation of Quantum Espresso

- We can install Quantum Espresso in our own laptops or desktops for running quick calculations and learning purposes. If we need to calculate more computationally intensive large systems, we would need access to better computing resources with large number of CPU cores, memory, or even with GPU support.  
- I am testing the codes on Ubuntu 20.04. Before we install Quantum Espresso, make sure our system has recommended libraries installed: 
```
sudo apt-get install build-essential gfortran mpich fftw3-dev
```
LAPACK Installation: 
Download package from: [http://www.netlib.org/lapack/](http://www.netlib.org/lapack/){:target="_blank"}
```
wget https://github.com/Reference-LAPACK/lapack/archive/v3.9.0.tar.gz 
tar -xzvf v3.9.0.tar.gz
cd lapack-3.9.0
cp make.inc.example make.inc
make blaslib
make lapacklib
make tmglib
sudo cp librefblas.a /usr/local/lib/libblas.a
sudo cp liblapack.a /usr/local/lib/liblapack.a
sudo cp libtmglib.a /usr/local/lib/libtmg.a
```
- Download Quantum Espresso (latest version 6.5 at the time of writing) - [https://github.com/QEF/q-e/releases](https://github.com/QEF/q-e/releases){:target="_blank"}
- Unzip the source files in your directory of choice 
```
tar -zxvf qe-6.5-ReleasePack.tgz
```
- Go to the directory 
```
cd qe-6.5
```
- Configure the installation. Here we can provide various configuration options. For example, if we want to have the parallel processing, we can use the flag. Read the manual in oder to properly understand. But in most cases we will be just fine with defaults. If we want parallel processing, we have to install the necessary libraries before. After that if we run `configure`, it should detect wer system automatically, in case we don't get what we want, try the various configuration `flags`. 
```
./configure 
make all
```

Note that certain programs bundled with Quantum espresso might not work correctly in parallel compilation, so we may need a serial compilation for them. We can set that by `./configure --disable-parallel`. 

Now we can run Quantum Espresso `pw.x` (or any other program) using `mpirun` by following command: 
```
mpirun -np 12 pw.x -inp inputfile > outputfile
```
Where `-np 12` specifies the number of processors. 

- Once completed, we can check test if everything is OK. Go to the `test-suite` directory and run 
```
make run-tests
```
If all is well, we will see **Passed** messages and we are good to go. 

We will install another scripting package `pwtk`. First we need to install following two libraries: 
```
sudo apt-get install tcl tcllib
```
Download the file from - <http://pwtk.ijs.si/download/pwtk-1.0.2.tar.gz>
```
wget "http://pwtk.ijs.si/download/pwtk-1.0.2.tar.gz"
```
Above command will download the file to your current directory. Next we need to just untar (no need to compile): 
```
tar zxvf pwtk-1.0.2.tar.gz
```

It would be good idea to add the executable path to your bash/zsh PATH. Open `.bashrc` or `.zshrc` file and add the following line with correct path to the bin directory: 
```
export PATH="dir/to/your/installation/qe-6.5/bin:$PATH"
export PATH="dir/to/your/pwtk-1.0.2:$PATH"
```
After this you may need to restart your terminal or source `.bashrc`. 

```
source ~/.bashrc
```

#### Running Quantum Espresso jobs in NUS HPC
Quantum Espresso is already installed in NUS HPC clusters. Here is a sample job script for NUS HPC clusters:
```
#!/bin/bash
#PBS -q parallel12
#PBS -l select=2:ncpus=12:mpiprocs=12:mem=45GB 
#PBS -j eo 
#PBS -N qe-job
source /etc/profile.d/rec_modules.sh
module load espresso6.5-intel_18
## module load espresso6.5-Centos6_Intel
cd $PBS_O_WORKDIR;
np=$( cat  ${PBS_NODEFILE} |wc -l );
mpirun -np $np -f ${PBS_NODEFILE} pw.x -inp qe-scf.in > qe-scf.out
```
