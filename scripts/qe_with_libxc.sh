#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash qe_with_libxc.sh
QE_VER="7.2"
LIBXC_VER="6.2.0"
INSTALL_PATH="/workspaces"
export LIBXCROOT="/opt/libxc"
NUM_PROCS=4
CWD=${PWD}
cd /tmp
sudo apt update && sudo apt upgrade -y
sudo apt install -y --no-install-recommends autoconf gawk gcc g++ make

wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/992857b9-624c-45de-9701-f6445d845359/l_BaseKit_p_2023.2.0.49397_offline.sh
sudo sh ./l_BaseKit_p_2023.2.0.49397_offline.sh -a --silent --eula accept --components intel.oneapi.lin.dpcpp-cpp-compiler:intel.oneapi.lin.mkl.devel
rm l_BaseKit_p_2023.2.0.49397_offline.sh

wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/0722521a-34b5-4c41-af3f-d5d14e88248d/l_HPCKit_p_2023.2.0.49440_offline.sh
sudo sh ./l_HPCKit_p_2023.2.0.49440_offline.sh -a --silent --eula accept
rm l_HPCKit_p_2023.2.0.49440_offline.sh

source /opt/intel/oneapi/setvars.sh

wget http://www.tddft.org/programs/libxc/down.php?file=${LIBXC_VER}/libxc-${LIBXC_VER}.tar.gz -O libxc-${LIBXC_VER}.tar.gz
tar -zxf libxc-${LIBXC_VER}.tar.gz
rm libxc-${LIBXC_VER}.tar.gz
cd libxc-${LIBXC_VER}
./configure --prefix=${LIBXCROOT} CC=icc FC=ifort
make -j${NUM_PROCS}
sudo make install
cd ..
rm -rf libxc-${LIBXC_VER}

wget https://gitlab.com/QEF/q-e/-/archive/qe-${QE_VER}/q-e-qe-${QE_VER}.tar.gz
tar -zxf q-e-qe-${QE_VER}.tar.gz
rm q-e-qe-${QE_VER}.tar.gz
cd q-e-qe-${QE_VER}

./configure \
  CC=mpicc \
  FC=mpiifort \
  F77=mpiifort \
  F90=mpiifort \
  MPIF90=mpiifort \
  CXX=icc \
  FFLAGS="-O3 -assume byterecl -g -traceback" \
  LAPACK_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl" \
  BLAS_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl" \
  SCALAPACK_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl" --prefix=${INSTALL_PATH}/qe-${QE_VER} --with-libxc --with-libxc-prefix=${LIBXCROOT}
export LAPACK="liblapack"
make -j${NUM_PROCS} all
make install
cd ..
rm -rf q-e-qe-${QE_VER}

cat << EOF | tee -a ~/.bashrc > /dev/null
source /opt/intel/oneapi/setvars.sh
export PATH="${INSTALL_PATH}/qe-${QE_VER}/bin:\$PATH"
EOF

cd ${CWD}
