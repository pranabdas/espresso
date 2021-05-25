# build image  : docker build -t espresso .
# run container : docker run -it --rm -p 8888:8888 -v $PWD:/home espresso bash

# Currently there is problem with mpi parallel version, could be related to wsl
# backend in Windows, have not tested in other platforms.

FROM ubuntu:focal

# mpirun requires non-root user
# RUN mkdir -p /usr/qe && \
#    groupadd -r qe && \
#    useradd -r -g qe -d /usr/qe -s /sbin/nologin -c "qe user" qe

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update --fix-missing; apt upgrade -yq; \
    apt install -yq --no-install-recommends \
    build-essential \
    ca-certificates \
    wget \

# libs for quantum espresso
    libblas3 \
    libc6 \
    libfftw3-dev \
    libgcc-s1 \
    gfortran \
    liblapack-dev \

# libs for parallel compilation
#    libopenmpi-dev \
#    libscalapack-openmpi-dev \
#    libmpich-dev \
#    libscalapack-mpich-dev \
#    libelpa4

# libs for pwtk
    tcl \
    tcllib \

# python and optional font
    python3 \
    python3-pip \
    fonts-open-sans

RUN cd /root && \
    wget https://github.com/QEF/q-e/releases/download/qe-6.7.0/qe-6.7-ReleasePack.tgz && \
    tar xzf qe-6.7-ReleasePack.tgz && \
    rm qe-6.7-ReleasePack.tgz && \
    cd qe-6.7 && \
    ./configure && \
#    make all && \

# only compiling pw and pp
    make pw && \
    make pp && \
    echo 'export PATH="/root/qe-6.7/bin:$PATH"' >> /root/.bashrc && \

# cleanup : asjust according to your needs
    cd /root/qe-6.7 && \
    rm -rf COUPLE \
        CPV \
        Doc \
        EPW \
        GUI \
        GWW \
        FFTXlib \
        FoX \
        HP \
        KS_Solvers \
        LAXlib \
        LIBBEEF \
        LR_Modules \
        Modules \
        NEB \
        PHonon \
        PWCOND \
        PlotPhon \
        QHA \
        TDDFT \
        XSpectra \
        archive \
        atomic \
        clib \
        cmake \
        dev-tools \
        dft-d3 \
        external \
        include \
        install \
        pseudo \
        TDDFPT \
        test-suite \
        upflib \
        upftools \
        UtilXlib && \
    cd /root/qe-6.7/PP && \
    rm -rf Doc \
        examples \
        simple_transport && \
    cd /root/qe-6.7/PW && \
    rm -rf Doc \
        examples && \

# pwtk installation
    cd /root && \
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
    apt update && apt install -y nodejs

# RUN chown -R qe:qe /usr/qe
# USER qe
WORKDIR /home
