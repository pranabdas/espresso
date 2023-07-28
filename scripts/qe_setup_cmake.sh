#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash qe_setup.sh
QE_VER="7.2"
INSTALL_PATH="/workspaces"
NUM_PROCS=4
CWD=${PWD}
cd /tmp

sudo apt update && sudo apt upgrade -y
sudo apt install -y --no-install-recommends autoconf cmake gawk gcc g++

wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/992857b9-624c-45de-9701-f6445d845359/l_BaseKit_p_2023.2.0.49397_offline.sh
sudo sh ./l_BaseKit_p_2023.2.0.49397_offline.sh -a --silent --eula accept --components intel.oneapi.lin.dpcpp-cpp-compiler:intel.oneapi.lin.mkl.devel
rm l_BaseKit_p_2023.2.0.49397_offline.sh

wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/0722521a-34b5-4c41-af3f-d5d14e88248d/l_HPCKit_p_2023.2.0.49440_offline.sh
sudo sh ./l_HPCKit_p_2023.2.0.49440_offline.sh -a --silent --eula accept
rm l_HPCKit_p_2023.2.0.49440_offline.sh
source /opt/intel/oneapi/setvars.sh

wget https://gitlab.com/QEF/q-e/-/archive/qe-${QE_VER}/q-e-qe-${QE_VER}.tar.gz
tar -zxf q-e-qe-${QE_VER}.tar.gz
rm q-e-qe-${QE_VER}.tar.gz
cd q-e-qe-${QE_VER}

cmake -B build \
    -DCMAKE_C_COMPILER=mpiicc \
    -DCMAKE_Fortran_COMPILER=mpiifort \
    -DQE_ENABLE_SCALAPACK=ON \
    -DENABLE_SCALAPACK_MPI=ON \
    -DQE_ENABLE_MPI=ON \
    -DQE_ENABLE_OPENMP=ON \
    -DQE_FOX_INTERNAL=ON \
    -DCMAKE_Fortran_FLAGS="-O3 -assume byterecl -g -traceback" \
    -DCMAKE_INSTALL_PREFIX=${INSTALL_PATH}/qe-${QE_VER}
cmake --build build -j${NUM_PROCS}
cmake --install build

cd ..
rm -rf q-e-qe-${QE_VER}

cat << EOF | tee -a ~/.bashrc > /dev/null
source /opt/intel/oneapi/setvars.sh
export PATH="${INSTALL_PATH}/qe-${QE_VER}/bin:\$PATH"
EOF
cd ${CWD}
