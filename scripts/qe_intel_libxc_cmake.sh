#!/bin/bash
# this script is not compatible with Bourne shell (sh), use bash instead:
# bash qe_setup.sh
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

cmake -B build \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_C_COMPILER=icx \
    -DENABLE_FORTRAN=ON \
    -DCMAKE_Fortran_COMPILER=ifx \
    -DCMAKE_INSTALL_PREFIX=${LIBXCROOT}
cmake --build build -j$(nproc)
sudo cmake --install build
cd ..
rm -rf libxc-${LIBXC_VER}

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
    -DQE_ENABLE_LIBXC=ON \
    -DCMAKE_INSTALL_PREFIX=${INSTALL_PATH}/qe-${QE_VER}
cmake --build build -j$(nproc)
cmake --install build

cd ..
rm -rf q-e-qe-${QE_VER}

cat << EOF | tee -a ~/.bashrc > /dev/null
source /opt/intel/oneapi/setvars.sh
export PATH="${INSTALL_PATH}/qe-${QE_VER}/bin:\$PATH"
EOF

cd ${CWD}
