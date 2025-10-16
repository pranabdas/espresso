#!/bin/bash
# bash qe_gnu_libxc.sh

# exit upon any command failure
set -e

QE_VER="7.2"
LIBXC_VER="6.2.0"
INSTALL_PATH="/workspaces/applications"
NUM_PROCS=4
export LIBXCROOT="/opt/libxc"
export OMP_NUM_THREADS=1
BUILD_DIR="/tmp"
CWD=${PWD}

cd ${BUILD_DIR}

if [ ! -d ${INSTALL_PATH} ]; then
  sudo mkdir -p ${INSTALL_PATH}
fi

sudo apt update && sudo apt upgrade -y
sudo apt install --no-install-recommends -y \
  autoconf \
  build-essential \
  ca-certificates \
  gfortran \
  libblas3 \
  libopenblas-dev \
  libc6 \
  libfftw3-dev \
  libgcc-s1 \
  liblapack-dev \
  libopenmpi-dev \
  libscalapack-openmpi-dev \
  libelpa17 \
  wget

wget http://www.tddft.org/programs/libxc/down.php?file=${LIBXC_VER}/libxc-${LIBXC_VER}.tar.gz -O libxc-${LIBXC_VER}.tar.gz
tar -zxf libxc-${LIBXC_VER}.tar.gz
rm libxc-${LIBXC_VER}.tar.gz
cd libxc-${LIBXC_VER}
./configure --prefix=${LIBXCROOT} CC=gcc FC=gfortran
make -j${NUM_PROCS}
sudo make install
cd ..
rm -rf libxc-${LIBXC_VER}

wget https://gitlab.com/QEF/q-e/-/archive/qe-${QE_VER}/q-e-qe-${QE_VER}.tar.gz
tar -zxf q-e-qe-${QE_VER}.tar.gz
rm q-e-qe-${QE_VER}.tar.gz
cd q-e-qe-${QE_VER}

./configure CC=mpicc FC=mpifort F77=mpifort F90=mpifort \
  MPIF90=mpif90 --prefix=${INSTALL_PATH}/qe-${QE_VER} --with-libxc --with-libxc-prefix=${LIBXCROOT} --enable-openmp
# there is race condition affecting parallel builds, retrying once seems to work
make -j${NUM_PROCS} all || { echo "Retrying..."; make clean; make -j$NUM_PROCS all; }
sudo make install
cd ..
rm -rf q-e-qe-${QE_VER}

cat << EOF | tee -a ~/.bashrc > /dev/null
export OMP_NUM_THREADS=1
export PATH="${INSTALL_PATH}/qe-${QE_VER}/bin:\$PATH"
EOF

cd ${CWD}
