### Installation of Quantum Espresso

- Read the Quantum Espresso [documentation](https://www.quantum-espresso.org/resources/users-manual){:target="_blank"} pages for detailed understanding
- I am running the codes on Ubuntu 20.04. Make sure that your system has `gcc` and `gfortran` compilers installed. 
- Downloading latest version of Quantum Espresso (which is version 6.5 at the time of writing this documentation) - [https://github.com/QEF/q-e/releases](https://github.com/QEF/q-e/releases){:target="_blank"}
- Unzip the source files in your directory of choice 
```
tar -zxvf qe-6.5-ReleasePack.tgz
```
- Go to the directory 
```
cd qe-6.5
```
- Configure the installation. Here you can provide various configuration options. For example, if you want to have the parallel processing, you can use the flag. Read the manual in oder to properly understand. But in most cases you will be just fine with defaults. 
```
./configure 
./configure --enable-parallel 
make all
```
- If you want to take advantage of multiple processors (which is necessary if you want to perform computationally intensive tasks), you must configure accordingly. You may need to install `mpich` library. If you are on Ubuntu: 
```
sudo apt-get install mpich
``` 
Now you can run Quantum Espresso `pw.x` (or any other program) using `mpirun` by following command: 
```
mpirun -np 4 pw.x -inp inputfile > outputfile
```
Where `-np 4` specifies the number of processors (in my case 4). 

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
