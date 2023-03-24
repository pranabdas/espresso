---
title: Jupyter notebooks
keywords: ["Jupyter notebook", "Setting up jupyter notebook", "Installing jupyter notebook", "Setting up python", "virtualenv"]
---

There are several ways you can run Jupyterlab in your computer.

## 1. Install on your computer
- Install [Python 3](https://www.python.org) in your computer
    ```bash
    # on ubuntu / debian
    apt install python3 python3-pip
    ```
- Install the required python packages on your computer
    ```bash
    pip3 install --upgrade -r requirements.txt
    # or
    pip3 install --upgrade numpy scipy matplotlib jupyterlab
    ```
- Run Jupyterlab
    ```bash
    jupyter-lab
    # or the classic jupyter notebook
    jupyter-notebook
    ```

## 2. Install python packages via virtualenv
- Install Python 3 and virtualenv on your computer
    ```bash
    pip3 install --upgrade virtualenv
    ```
- create virtual environment in the project directory
    ```bash
    cd qe-dft
    virtualenv venv
    ```
- activate virtual env
    ```bash
    source venv/bin/activate
    ```
- Install required python packages under virtualenv
- Launch Jupyterlab
- Once done, deactivate virtualenv
    ```bash
    deactivate
    ```

## 3. Run on a container
- Install [Docker](https://docs.docker.com/get-docker/)
- Create an image with Python and the required packages installed
    ```bash
    # build using the Dockerfile included in my github repo:
    # https://github.com/pranabdas/espresso
    # (adjust the Dockerfile according to your needs)
    docker build -t espresso .
    ```
- Run a container with port forwarding
    ```bash
    docker run -it --rm -p 8888:8888 -v ${PWD}:/home espresso bash
    ```
- Launch Jupyterlab
    ```
    jupyter-lab
    ```
