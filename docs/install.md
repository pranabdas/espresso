### Installation of Quantum Espresso

- Read the Quantum Espresso [documentation](https://www.quantum-espresso.org/resources/users-manual){:target="_blank"} pages for detailed understanding
- Most of my codes are tested on Ubuntu 20.04 
- Downloading latest version of Quantum Espresso (which is version 6.5 at the time of writing this documentation) - [https://www.quantum-espresso.org/download](https://www.quantum-espresso.org/download){:target="_blank"}
- Unzip the source files in your directory of choice `tar -zxvf qe-6.5-ReleasePack.tgz`
- Go to the directory `qe-6.5`
- Configure the installation `./configure`
- To enable parallel processing `./configure --enable-parallel` 
- Then `make all` 
- Once completed, we can check test if everything is OK. Go to the `test-suite` directory and run `make run-tests`. If all is well, you will see **Passed** messages. 
