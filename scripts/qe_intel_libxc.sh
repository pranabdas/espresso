#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash qe_with_libxc.sh
QE_VER="7.6"
LIBXC_VER="7.0.0"
INSTALL_PATH="/workspaces"
export LIBXCROOT="/opt/libxc"
CWD=${PWD}
cd /tmp

bash install_intel_oneapi.sh
source /opt/intel/oneapi/setvars.sh

wget https://gitlab.com/libxc/libxc/-/archive/${LIBXC_VER}/libxc-${LIBXC_VER}.tar.gz
tar -zxf libxc-${LIBXC_VER}.tar.gz
rm libxc-${LIBXC_VER}.tar.gz
cd libxc-${LIBXC_VER}
./configure --prefix=${LIBXCROOT} CC=icc FC=ifort
make -j$(nproc)
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
make -j$(nproc) all
make install
cd ..
rm -rf q-e-qe-${QE_VER}

cat << EOF | tee -a ~/.bashrc > /dev/null
source /opt/intel/oneapi/setvars.sh
export PATH="${INSTALL_PATH}/qe-${QE_VER}/bin:\$PATH"
EOF

cd ${CWD}
