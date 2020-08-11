### Installation of Quantum Espresso

- We can install Quantum Espresso in our own laptops or desktops for running quick calculations and learning. If you need to calculate more complicated/larger systems, you need access to better computing facilities with large number of processors/cores, memory, and even better with GPU support.  
- I am testing the codes on Ubuntu 20.04. Before you install Quantum Espresso, make sure your system has following packages and libraries: 
```
sudo apt-get install build-essential gfortran mpich fftw3-dev
```
LAPACK Installation: 
Download package from: http://www.netlib.org/lapack/
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
- Configure the installation. Here you can provide various configuration options. For example, if you want to have the parallel processing, you can use the flag. Read the manual in oder to properly understand. But in most cases you will be just fine with defaults. If you want parallel processing, you have to install the necessary libraries before. After that if you run `configure`, it should detect your system automatically, in case you don't get what you want, try the `flags`. If certain libraries are not detected, you can include them using `LIBDIRS`. 
```
./configure 
make all
```
Note that `configure` might not pick the right settings is all systems, in that case you have to some manual work. 

Now you can run Quantum Espresso `pw.x` (or any other program) using `mpirun` by following command: 
```
mpirun -np 12 pw.x -inp inputfile > outputfile
```
Where `-np 12` specifies the number of processors. 

- Once completed, we can check test if everything is OK. Go to the `test-suite` directory and run 
```
make run-tests
```
If all is well, you will see **Passed** messages and we are good to go. 

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

It would be good idea to add the executable path to your bash/zsh PATH. Open your `.bashrc` or `.zshrc` file and add the following line with correct path to the bin directory: 
```
export PATH="dir/to/your/installation/qe-6.5/bin:$PATH"
export PATH="dir/to/your/pwtk-1.0.2:$PATH"
```
After this you may need to restart your terminal. 

```
source ~/.bashrc
```
