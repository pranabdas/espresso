# build image  : docker build -t espresso .
# run container : docker run -it --rm -p 8888:8888 -v $PWD:/home espresso bash

# Currently there is problem with mpi parallel version, could be related to wsl
# backend in Windows, have not tested in other platforms.

# Get Ubuntu 22.04 to have QE 6.7
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update --fix-missing; apt upgrade -yq; \
    apt install -yq --no-install-recommends \
    libfftw3-dev \
    quantum-espresso \
    wget \
# libs for pwtk
    tcl \
    tcllib \
# python and optional font
    python3 \
    python3-pip \
    fonts-open-sans

RUN cd /root && \
# pwtk installation
    wget "http://pwtk.ijs.si/download/pwtk-2.0.tar.gz" && \
    tar xzf pwtk-2.0.tar.gz && \
    rm pwtk-2.0.tar.gz && \
    echo 'export PATH="/root/pwtk-2.0:$PATH"' >> /root/.bashrc && \
# python packages
    pip3 install jupyterlab \
        numpy \
        scipy \
        matplotlib && \
# jupyterlab configs
    mkdir /etc/jupyter && \
    (echo "c.ServerApp.ip = '0.0.0.0'" && \
     echo "c.ServerApp.allow_root = True" && \
     echo "c.ServerApp.open_browser = False") \
       >> /etc/jupyter/jupyter_server_config.py && \
# nodejs LTS (required for full functionality of jupyterlab)
    wget -O - https://deb.nodesource.com/setup_lts.x | bash - && \
    apt update && apt install -y --no-install-recommends nodejs

WORKDIR /home
