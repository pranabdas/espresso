#!/bin/bash
WANNIER_VER="3.1.0"
INSTALL_PATH="/workspaces"
NUM_PROCESSORS=4
CWD=${PWD}
# download wannier90 code
cd ${INSTALL_PATH}
wget https://github.com/wannier-developers/wannier90/archive/v${WANNIER_VER}.tar.gz
tar -zxf v${WANNIER_VER}.tar.gz
rm v${WANNIER_VER}.tar.gz
cd wannier90-${WANNIER_VER}
# using intel compilers and libs
source /opt/intel/oneapi/setvars.sh
# installation instruction can be found in README.install
cp ./config/make.inc.ifort ./make.inc
# for parallel installation using intel compiler set following lines in make.inc
# COMMS=mpi
# MPIF90=mpiifort
make -j${NUM_PROCESSORS}
