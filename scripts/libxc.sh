wget http://www.tddft.org/programs/libxc/down.php?file=6.1.0/libxc-6.1.0.tar.gz -O libxc-6.1.0.tar.gz
tar -zxf libxc-6.1.0.tar.gz
cd libxc-6.1.0
./configure --prefix=/opt/libxc
make -j4
make check
sudo make install

# https://www.quantum-espresso.org/Doc/user_guide/node13.html
# QE v7.2
# ./configure \
#   F90=mpiifort \
#   MPIF90=mpiifort \
#   CC=mpicc CXX=icc \
#   F77=mpiifort \
#   FFLAGS="-O3 -assume byterecl -g -traceback" \
#   LAPACK_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl" \
#   BLAS_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl" \
#   SCALAPACK_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl" \
#   --with-libxc \
#   --with-libxc-prefix="/opt/libxc"

# make.inc
# LAPACK      = liblapack
