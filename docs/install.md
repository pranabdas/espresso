## Installation of Quantum Espresso

* Read the Quantum Espresso [documentation](https://www.quantum-espresso.org/resources/users-manual) pages for detailed understanding
* Most of my codes are tested on Ubuntu 18.04.3 LTS
* Downloading latest version of Quantum Espresso (which is 6.5MaX at the time of writing this documentation)  - [https://www.quantum-espresso.org/download](https://www.quantum-espresso.org/download)
* Unzip the source files in your directory of choice
* Go to the directory `q-e-qe-6.5MaX`
* Configure the installation `./configure`
* Then `make all`
* Once completed, we can check test if everything is OK. Go to the `test-suite` directory and run `make run-tests`. If all is well, you will see **Passed** messages.
