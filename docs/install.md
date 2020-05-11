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
- Once completed, we can check test if everything is OK. Go to the `test-suite` directory and run 
```
make run-tests
```
If all is well, you will see **Passed** messages and we are good to go. 
