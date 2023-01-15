#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash qe_setup.sh
CWD=${PWD}
QE_VAR="7.1"
QE_ROOT_DIR="/workspaces"
cd /tmp
sudo apt update && sudo apt upgrade -y
sudo apt install -y autoconf cmake make
wget https://registrationcenter-download.intel.com/akdlm/irc_nas/19079/l_BaseKit_p_2023.0.0.25537_offline.sh
sudo sh ./l_BaseKit_p_2023.0.0.25537_offline.sh -a --silent --eula accept --components intel.oneapi.lin.dpcpp-cpp-compiler:intel.oneapi.lin.mkl.devel
rm l_BaseKit_p_2023.0.0.25537_offline.sh
wget https://registrationcenter-download.intel.com/akdlm/irc_nas/19084/l_HPCKit_p_2023.0.0.25400_offline.sh
sudo sh ./l_HPCKit_p_2023.0.0.25400_offline.sh -a --silent --eula accept
rm l_HPCKit_p_2023.0.0.25400_offline.sh
source /opt/intel/oneapi/setvars.sh
cd ${QE_ROOT_DIR}
if [ -d q-e-qe-${QE_VAR} ]; then rm -rf q-e-qe-${QE_VAR}; fi
wget https://gitlab.com/QEF/q-e/-/archive/qe-${QE_VAR}/q-e-qe-${QE_VAR}.tar.gz
tar zxvf q-e-qe-${QE_VAR}.tar.gz
rm q-e-qe-${QE_VAR}.tar.gz
cd q-e-qe-${QE_VAR}
mkdir build && cd build
cmake -DCMAKE_C_COMPILER=mpiicc -DCMAKE_Fortran_COMPILER=mpiifort -DQE_ENABLE_SCALAPACK=ON ..
make -j4
mv bin ..
cd ..
rm -rf build
echo 'source /opt/intel/oneapi/setvars.sh' >> ~/.bashrc
echo 'export PATH="/workspaces/q-e-qe-${QE_VAR}/bin:$PATH"' >> ~/.bashrc
cd ${CWD}
