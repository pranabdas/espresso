#!/bin/bash
ONEAPI_ROOT=/opt/intel/oneapi

sudo apt update
sudo apt install -y --no-install-recommends \
  ca-certificates \
  gawk \
  g++ \
  gcc \
  gfortran \
  ncurses-term \
  wget

pkgs=(
    "https://registrationcenter-download.intel.com/akdlm/IRC_NAS/233a8b7a-ec95-4e51-bc5f-9dcd4f0d1dc3/intel-onetbb-2022.3.1.402_offline.sh"
    "https://registrationcenter-download.intel.com/akdlm/IRC_NAS/0d61d48a-4fe8-4cb2-bd9d-94d2c19c6227/intel-dpcpp-cpp-compiler-2025.3.2.26_offline.sh"
    "https://registrationcenter-download.intel.com/akdlm/IRC_NAS/3e53d136-2870-4836-adb1-892b558fa34a/intel-fortran-compiler-2025.3.2.25_offline.sh"
    "https://registrationcenter-download.intel.com/akdlm/IRC_NAS/c477188f-0ba1-4213-8945-22f16ebc8ecb/intel-oneccl-2021.17.2.6_offline.sh"
    "https://registrationcenter-download.intel.com/akdlm/IRC_NAS/6a17080f-f0de-41b9-b587-52f92512c59a/intel-onemkl-2025.3.1.11_offline.sh"
)

for pkg in "${pkgs[@]}"; do
    wget $pkg
    sudo sh ./$( basename $pkg ) -a --silent --eula accept --install-dir $ONEAPI_ROOT
    rm -f $( basename $pkg )
done
