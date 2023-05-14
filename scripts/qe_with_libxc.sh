#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash qe_with_libxc.sh
QE_VER="7.2"
LIBXC_VER="6.1.0"
INSTALL_PATH="/workspaces"
NUM_PROCESSORS=4
CWD=${PWD}
cd /tmp
sudo apt update && sudo apt upgrade -y
sudo apt install -y --no-install-recommends autoconf cmake gawk gcc g++ make

wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/7deeaac4-f605-4bcf-a81b-ea7531577c61/l_BaseKit_p_2023.1.0.46401_offline.sh
sudo sh ./l_BaseKit_p_2023.1.0.46401_offline.sh -a --silent --eula accept --components intel.oneapi.lin.dpcpp-cpp-compiler:intel.oneapi.lin.mkl.devel
rm l_BaseKit_p_2023.1.0.46401_offline.sh
wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/1ff1b38a-8218-4c53-9956-f0b264de35a4/l_HPCKit_p_2023.1.0.46346_offline.sh
sudo sh ./l_HPCKit_p_2023.1.0.46346_offline.sh -a --silent --eula accept
rm l_HPCKit_p_2023.1.0.46346_offline.sh
source /opt/intel/oneapi/setvars.sh
echo 'source /opt/intel/oneapi/setvars.sh' >> ~/.bashrc

wget http://www.tddft.org/programs/libxc/down.php?file=${LIBXC_VER}/libxc-${LIBXC_VER}.tar.gz -O libxc-${LIBXC_VER}.tar.gz
tar -zxf libxc-${LIBXC_VER}.tar.gz
rm libxc-${LIBXC_VER}.tar.gz
cd libxc-${LIBXC_VER}
./configure --prefix=/opt/libxc
make -j${NUM_PROCESSORS}
make check
sudo make install

cd ${INSTALL_PATH}
if [ -d q-e-qe-${QE_VER} ]; then rm -rf q-e-qe-${QE_VER}; fi
wget https://gitlab.com/QEF/q-e/-/archive/qe-${QE_VER}/q-e-qe-${QE_VER}.tar.gz
tar -zxvf q-e-qe-${QE_VER}.tar.gz
rm q-e-qe-${QE_VER}.tar.gz
cd q-e-qe-${QE_VER}

./configure \
  F90=mpiifort \
  MPIF90=mpiifort \
  CC=mpicc \
  CXX=icc \
  F77=mpiifort \
  FFLAGS="-O3 -assume byterecl -g -traceback" \
  LAPACK_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl" \
  BLAS_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl" \
  SCALAPACK_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl" \
  --with-libxc \
  --with-libxc-prefix="/opt/libxc"

export LAPACK="liblapack"
make -j${NUM_PROCESSORS} all
cat << EOF | tee -a ~/.bashrc > /dev/null
export PATH="${INSTALL_PATH}/q-e-qe-${QE_VER}/bin:$PATH"
EOF
cd ${CWD}
