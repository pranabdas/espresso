#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash qe_setup.sh
CWD=${PWD}
QE_VER="7.2"
INSTALL_DIR="/workspaces"
cd /tmp
sudo apt update && sudo apt upgrade -y
sudo apt install -y --no-install-recommends autoconf cmake gawk make
wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/7deeaac4-f605-4bcf-a81b-ea7531577c61/l_BaseKit_p_2023.1.0.46401_offline.sh
sudo sh ./l_BaseKit_p_2023.1.0.46401_offline.sh -a --silent --eula accept --components intel.oneapi.lin.dpcpp-cpp-compiler:intel.oneapi.lin.mkl.devel
rm l_BaseKit_p_2023.1.0.46401_offline.sh
wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/1ff1b38a-8218-4c53-9956-f0b264de35a4/l_HPCKit_p_2023.1.0.46346_offline.sh
sudo sh ./l_HPCKit_p_2023.1.0.46346_offline.sh -a --silent --eula accept
rm l_HPCKit_p_2023.1.0.46346_offline.sh
source /opt/intel/oneapi/setvars.sh
cd ${INSTALL_DIR}
if [ -d q-e-qe-${QE_VER} ]; then rm -rf q-e-qe-${QE_VER}; fi
wget https://gitlab.com/QEF/q-e/-/archive/qe-${QE_VER}/q-e-qe-${QE_VER}.tar.gz
tar zxvf q-e-qe-${QE_VER}.tar.gz
rm q-e-qe-${QE_VER}.tar.gz
cd q-e-qe-${QE_VER}
mkdir build && cd build
cmake -DCMAKE_C_COMPILER=mpiicc -DCMAKE_Fortran_COMPILER=mpiifort -DQE_ENABLE_SCALAPACK=ON ..
make -j4
mv bin ..
cd ..
rm -rf build
echo 'source /opt/intel/oneapi/setvars.sh' >> ~/.bashrc
echo 'export PATH="/workspaces/q-e-qe-${QE_VER}/bin:$PATH"' >> ~/.bashrc
cd ${CWD}
