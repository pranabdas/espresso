#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash qe_setup.sh
current_pwd=${PWD}
install_dir="/workspaces"
cd /tmp
sudo apt update && sudo apt upgrade -y
sudo apt install -y autoconf cmake make
wget https://registrationcenter-download.intel.com/akdlm/irc_nas/18673/l_BaseKit_p_2022.2.0.262_offline.sh
sh ./l_BaseKit_p_2022.2.0.262_offline.sh -a --silent --eula accept --components intel.oneapi.lin.dpcpp-cpp-compiler:intel.oneapi.lin.mkl.devel
rm l_BaseKit_p_2022.2.0.262_offline.sh
wget https://registrationcenter-download.intel.com/akdlm/irc_nas/18679/l_HPCKit_p_2022.2.0.191_offline.sh
sh ./l_HPCKit_p_2022.2.0.191_offline.sh -a --silent --eula accept
rm l_HPCKit_p_2022.2.0.191_offline.sh
source /opt/intel/oneapi/setvars.sh
cd ${install_dir}
if [ -d q-e-qe-7.1 ]; then rm -rf q-e-qe-7.1; fi
wget https://gitlab.com/QEF/q-e/-/archive/qe-7.1/q-e-qe-7.1.tar.gz
tar zxvf q-e-qe-7.1.tar.gz
rm q-e-qe-7.1.tar.gz
cd q-e-qe-7.1
mkdir build && cd build
cmake -DCMAKE_C_COMPILER=mpiicc -DCMAKE_Fortran_COMPILER=mpiifort -DQE_ENABLE_SCALAPACK=ON ..
make -j4
mv bin ..
cd ..
rm -rf build
echo 'source /opt/intel/oneapi/setvars.sh' >> ~/.bashrc
echo 'export PATH="/workspaces/q-e-qe-7.1/bin:$PATH"' >> ~/.bashrc
cd ${current_pwd}
if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
