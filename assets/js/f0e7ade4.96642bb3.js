"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([["2154"],{9061:function(e,n,l){l.r(n),l.d(n,{default:()=>p,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"setup/hpc","title":"High Performance Computing","description":"In order to perform computationally heavy calculations, we would require access","source":"@site/docs/setup/hpc.mdx","sourceDirName":"setup","slug":"/setup/hpc","permalink":"/espresso/setup/hpc","draft":false,"unlisted":false,"editUrl":"https://github.com/pranabdas/espresso/blob/main/docs/setup/hpc.mdx","tags":[],"version":"current","frontMatter":{"title":"High Performance Computing","keywords":["HPC","High Performance Computing","Compiling Quantum Espresso","Installing Quantum Espresso","Quantum Espresso Installation","Intel MKL","Parallel Computing","PBS job","HPC job"]},"sidebar":"docs","previous":{"title":"Installation","permalink":"/espresso/setup/install"},"next":{"title":"Jupyter notebooks","permalink":"/espresso/setup/jupyter"}}'),a=l("5893"),i=l("65"),t=l("5056");let r={title:"High Performance Computing",keywords:["HPC","High Performance Computing","Compiling Quantum Espresso","Installing Quantum Espresso","Quantum Espresso Installation","Intel MKL","Parallel Computing","PBS job","HPC job"]},o=void 0,c={},d=[{value:"Useful UNIX commands",id:"useful-unix-commands",level:2},{value:"Running jobs at NUS HPC",id:"running-jobs-at-nus-hpc",level:2},{value:"Abort and restart a calculation",id:"abort-and-restart-a-calculation",level:2},{value:"Compiling Quantum Espresso using Intel\xae Math Kernel Library (MKL)",id:"compiling-quantum-espresso-using-intel-math-kernel-library-mkl",level:2},{value:"Installing Intel oneAPI libraries",id:"installing-intel-oneapi-libraries",level:2},{value:"Intel oneAPI Base Toolkit:",id:"intel-oneapi-base-toolkit",level:4},{value:"HPC Toolkit",id:"hpc-toolkit",level:4},{value:"Intel MKL library",id:"intel-mkl-library",level:4},{value:"Compiling Quantum Espresso with CMake",id:"compiling-quantum-espresso-with-cmake",level:2},{value:"Resources",id:"resources",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In order to perform computationally heavy calculations, we would require access\nto high performance computing facilities."}),"\n",(0,a.jsx)(n.h2,{id:"useful-unix-commands",children:"Useful UNIX commands"}),"\n",(0,a.jsx)(n.p,{children:"Connect to a login node via ssh:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ssh {username}@atlas9.nus.edu.sg\n"})}),"\n",(0,a.jsx)(n.p,{children:"Secure copy files between local and remote machines:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"scp {username}@10.10.0.2:/remote/file.txt /local/directory\nscp local/file.txt {username}@10.10.0.2:/remote/directory\n"})}),"\n",(0,a.jsx)(n.p,{children:"Check disk usage:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"du -hs .\ndu -hs /path/\n"})}),"\n",(0,a.jsx)(n.p,{children:"Rsync to synchronize two folders:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rsync -azhv --delete /source/my_project/ /destination/my_project\n"})}),"\n",(0,a.jsx)(n.h2,{id:"running-jobs-at-nus-hpc",children:"Running jobs at NUS HPC"}),"\n",(0,a.jsx)(n.p,{children:"Check your storage quota:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"hpc s\n"})}),"\n",(0,a.jsx)(n.p,{children:"PBS commands:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"hpc pbs summary\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example scrips for job submissions:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"hpc pbs script parallel20\nhpc pbs vasp\n"})}),"\n",(0,a.jsx)(n.p,{children:"List available modules:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"module avail\n"})}),"\n",(0,a.jsx)(n.p,{children:"Load a module:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"module load {module-name}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Purge loaded modules:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"module purge\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Quantum Espresso is already installed in NUS HPC clusters. Here is a sample job\nscript for ",(0,a.jsx)(n.a,{href:"https://nusit.nus.edu.sg/hpc/",children:"NUS HPC"})," clusters:"]}),"\n","\n",(0,a.jsx)(t.Z,{language:"bash",title:"scripts/pbs_job.sh",showLineNumbers:!0,children:"#!/bin/bash\n#PBS -q parallel24\n#PBS -l select=2:ncpus=24:mpiprocs=24:mem=96GB\n#PBS -j eo\n#PBS -N qe-project-xx\nsource /etc/profile.d/rec_modules.sh\nmodule load espresso6.5-intel_18\n## module load espresso6.5-Centos6_Intel\ncd $PBS_O_WORKDIR;\nnp=$( cat ${PBS_NODEFILE} | wc -l );\nmpirun -np $np -f ${PBS_NODEFILE} pw.x -inp qe-scf.in > qe-scf.out\n"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Notice that the lines beginning with ",(0,a.jsx)(n.code,{children:"#PBS"})," are actually PBS commands, not\ncomments. For comments, I am using ",(0,a.jsx)(n.code,{children:"##"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:"Query about a queue system:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"qstat -q\n"})}),"\n",(0,a.jsx)(n.p,{children:"Check status of a particular queue system:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"qstat -Qx parallel24\n"})}),"\n",(0,a.jsx)(n.p,{children:"Submitting a job:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"qsub pbs_job.sh\n"})}),"\n",(0,a.jsx)(n.p,{children:"Check running jobs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"qstat\n"})}),"\n",(0,a.jsx)(n.p,{children:"Details about a job:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"qstat -f {job-id}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Stopping a job:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"qdel {job-id}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"abort-and-restart-a-calculation",children:"Abort and restart a calculation"}),"\n",(0,a.jsxs)(n.p,{children:["If you need to modify certain parameters while the program is running, e.g., you\nwant to change the ",(0,a.jsx)(n.code,{children:"mixing_beta"})," value because SCF accuracy is oscillation\nwithout any sign of convergence. Create an empty file named ",(0,a.jsx)(n.code,{children:"{prefix}.EXIT"})," in\nthe directory where you have the input file or in the ",(0,a.jsx)(n.code,{children:"outdir"})," as set in the\n",(0,a.jsx)(n.code,{children:"&CONTROL"})," card of input file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"touch {prefix}.EXIT\n"})}),"\n",(0,a.jsxs)(n.p,{children:["That will stop the program on the next iteration, and save the state. In order\nto restart, set the ",(0,a.jsx)(n.code,{children:"restart_mode"})," in ",(0,a.jsx)(n.code,{children:"&CONTROL"})," card to ",(0,a.jsx)(n.code,{children:"'restart'"})," and re-run\nafter necessary changes. You must re-submit the job with the same number of\nprocessors."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"&CONTROL\n  ...\n  restart_mode = 'restart'\n  ...\n/\n"})}),"\n",(0,a.jsx)(n.h2,{id:"compiling-quantum-espresso-using-intel-math-kernel-library-mkl",children:"Compiling Quantum Espresso using Intel\xae Math Kernel Library (MKL)"}),"\n",(0,a.jsx)(n.p,{children:"If you need a newer or specific version of Quantum Espresso that is not\ninstalled in the NUS clusters or you have modified the source codes yourself,\nhere are the steps that I followed to successfully compile."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Quantum Espresso project is primarily hosted on GitLab, and its mirror is\nmaintained at ",(0,a.jsx)(n.a,{href:"https://github.com/QEF/q-e",children:"GitHub"}),". You may check their\nrepository at ",(0,a.jsx)(n.a,{href:"https://gitlab.com/QEF/q-e",children:"GitLab"})," for more up to date\ninformation. The releases via GitLab can be found under:\n",(0,a.jsx)(n.a,{href:"https://gitlab.com/QEF/q-e/-/releases",children:"https://gitlab.com/QEF/q-e/-/releases"})]})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://gitlab.com/QEF/q-e/-/releases",children:"Download"})," and decompress the source\nfiles."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://gitlab.com/QEF/q-e/-/archive/qe-7.2/q-e-qe-7.2.tar.gz\ntar -zxvf q-e-qe-7.2.tar.gz\n"})}),"\n",(0,a.jsx)(n.p,{children:"Load the necessary modules (applicable for NUS clusters, last checked in Jun\n2022):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"module load xe_2018\nmodule load fftw/3.3.7\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Go to QE directory and run ",(0,a.jsx)(n.code,{children:"configure"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd q-e-qe-7.2\n./configure\n"})}),"\n",(0,a.jsx)(n.p,{children:"You will see output something like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"...\nBLAS_LIBS=  -lmkl_intel_lp64  -lmkl_sequential -lmkl_core\nLAPACK_LIBS=\nFFT_LIBS=\n...\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For me, the ",(0,a.jsx)(n.code,{children:"LAPACK_LIBS"})," and ",(0,a.jsx)(n.code,{children:"FFT_LIBS"})," libs were not automatically detected. We\nneed to specify them manually. First, get the link libraries line specific to\nyour version of MKL and other configurations from the ",(0,a.jsx)(n.a,{href:"https://software.intel.com/content/www/us/en/develop/tools/oneapi/components/onemkl/link-line-advisor.html",children:"Intel link advisor"}),".\nFor my case, the link line was:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\n"})}),"\n",(0,a.jsx)("img",{src:l(1289).Z,class:"inv-hue-rot-180",alt:"intel-link-line-adviser",width:"600px"}),"\n",(0,a.jsxs)(n.p,{children:["We need to insert the link for ",(0,a.jsx)(n.code,{children:"BLAS_LIBS"}),", ",(0,a.jsx)(n.code,{children:"LAPACK_LIBS"}),", and ",(0,a.jsx)(n.code,{children:"SCALAPACK_LIBS"}),".\nWe also need to find out where is the FFTW lib located. In NUS HPC, we can use\n",(0,a.jsx)(n.code,{children:"module avail"})," command to see where a particular module is located, usually\nunder ",(0,a.jsx)(n.code,{children:"/app1/modules/"}),". Open ",(0,a.jsx)(n.code,{children:"make.inc"})," and make the following changes:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",metastring:'title="make.inc"',children:"# ...\nCFLAGS         = -O2 $(DFLAGS) $(IFLAGS)\nCFLAGS         = -O3 $(DFLAGS) $(IFLAGS)\nF90FLAGS       = $(FFLAGS) -nomodule -fpp $(FDFLAGS) $(CUDA_F90FLAGS) $(IFLAGS) $(MODFLAGS)\n\n# compiler flags with and without optimization for fortran-77\n# the latter is NEEDED to properly compile dlamch.f, used by lapack\n- FFLAGS         = -O2 -assume byterecl -g -traceback\n+ FFLAGS         = -O3 -assume byterecl -g -traceback\nFFLAGS_NOOPT   = -O0 -assume byterecl -g -traceback\n# ...\n# If you have nothing better, use the local copy\n# BLAS_LIBS = $(TOPDIR)/LAPACK/libblas.a\n- BLAS_LIBS      =   -lmkl_intel_lp64  -lmkl_sequential -lmkl_core\n+ BLAS_LIBS      = -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\n\n# If you have nothing better, use the local copy\n# LAPACK = liblapack\n# LAPACK_LIBS = $(TOPDIR)/external/lapack/liblapack.a\n- LAPACK      =\n+ LAPACK      = liblapack\n- LAPACK_LIBS =\n+ LAPACK_LIBS = -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\n\n- SCALAPACK_LIBS =\n+ SCALAPACK_LIBS = -L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl\n\n# nothing is needed here if the internal copy of FFTW is compiled\n# (needs -D__FFTW in DFLAGS)\n\n- FFT_LIBS       =\n+ FFT_LIBS       = -L/app1/centos6.3/gnu/fftw/3.3.7/lib/ -lmpi\n# ...\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now we are ready to compile:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"make -j8 all\n"})}),"\n",(0,a.jsxs)(n.p,{children:["I am parallelizing with 8 processors to speed things up. You may add the\n",(0,a.jsx)(n.code,{children:"q-e-qe-7.2/bin"})," path to your ",(0,a.jsx)(n.code,{children:".bashrc"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"echo 'export PATH=\"/home/svu/{username}/q-e-qe-7.2/bin:$PATH\"' >> ~/.bashrc\n"})}),"\n",(0,a.jsx)(n.p,{children:"And don't forget to load dependencies before calling QE executables."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"module load xe_2018\nmodule load fftw/3.3.7\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If you are submitting job via PBS queue, you need to provide full path of the QE\nexecutables, e.g., ",(0,a.jsx)(n.code,{children:"/home/svu/{username}/q-e-qe-7.2/bin/pw.x"}),". PBS system won't\nread your bash settings, neither the relative paths of your login node would\napply."]})}),"\n",(0,a.jsx)(n.h2,{id:"installing-intel-oneapi-libraries",children:"Installing Intel oneAPI libraries"}),"\n",(0,a.jsxs)(n.p,{children:["If you need to install Intel oneAPI libraries yourself, following instructions\nmight be useful. Please refer to Intel ",(0,a.jsx)(n.a,{href:"https://www.intel.com/content/www/us/en/developer/tools/oneapi/overview.html",children:"website"}),"\nfor up to date information."]}),"\n",(0,a.jsx)(n.h4,{id:"intel-oneapi-base-toolkit",children:"Intel oneAPI Base Toolkit:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/992857b9-624c-45de-9701-f6445d845359/l_BaseKit_p_2023.2.0.49397_offline.sh\n\n# requires gnu-awk\nsudo apt update && sudo apt install -y --no-install-recommends gawk gcc g++\n\n# interactive cli installation\nsudo apt install -y --no-install-recommends ncurses-term\nsudo sh ./l_BaseKit_p_2023.2.0.49397_offline.sh -a --cli\n\n# list components included in oneAPI Base Toolkit\nsh ./l_BaseKit_p_2023.2.0.49397_offline.sh -a --list-components\n\n# install a subset of components with silent/unattended option\nsudo sh ./l_BaseKit_p_2023.2.0.49397_offline.sh -a --silent --eula accept --components intel.oneapi.lin.dpcpp-cpp-compiler:intel.oneapi.lin.mkl.devel\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If you install oneAPI without ",(0,a.jsx)(n.code,{children:"sudo"})," privilege, it will be installed under the\nuser directory: ",(0,a.jsx)(n.code,{children:"/home/{username}/intel/oneapi/"}),". After installation is\ncompleted, the setup script will print the installation location."]})}),"\n",(0,a.jsx)(n.h4,{id:"hpc-toolkit",children:"HPC Toolkit"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/0722521a-34b5-4c41-af3f-d5d14e88248d/l_HPCKit_p_2023.2.0.49440_offline.sh\nsudo sh ./l_HPCKit_p_2023.2.0.49440_offline.sh -a --silent --eula accept\n"})}),"\n",(0,a.jsx)(n.h4,{id:"intel-mkl-library",children:"Intel MKL library"}),"\n",(0,a.jsx)(n.p,{children:"Installing individual components:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://registrationcenter-download.intel.com/akdlm/IRC_NAS/adb8a02c-4ee7-4882-97d6-a524150da358/l_onemkl_p_2023.2.0.49497_offline.sh\nsudo sh ./l_onemkl_p_2023.2.0.49497_offline.sh -a --silent --eula accept\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After installation, do not forget to ",(0,a.jsx)(n.code,{children:"source"})," the environment variables before\nusing:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"source /opt/intel/oneapi/setvars.sh\n"})}),"\n",(0,a.jsx)(n.p,{children:"Compile quantum espresso:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'wget https://gitlab.com/QEF/q-e/-/archive/qe-7.2/q-e-qe-7.2.tar.gz\ntar -zxvf q-e-qe-7.2.tar.gz\nrm q-e-qe-7.2.tar.gz\ncd q-e-qe-7.2\n./configure \\\n  F90=mpiifort \\\n  MPIF90=mpiifort \\\n  CC=mpicc CXX=icc \\\n  F77=mpiifort \\\n  FFLAGS="-O3 -assume byterecl -g -traceback" \\\n  LAPACK_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl" \\\n  BLAS_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl" \\\n  SCALAPACK_LIBS="-L${MKLROOT}/lib/intel64 -lmkl_scalapack_lp64 -lmkl_intel_lp64 -lmkl_sequential -lmkl_core -lmkl_blacs_intelmpi_lp64 -lpthread -lm -ldl"\nmake -j4 all\n'})}),"\n",(0,a.jsx)(n.h2,{id:"compiling-quantum-espresso-with-cmake",children:"Compiling Quantum Espresso with CMake"}),"\n",(0,a.jsxs)(n.p,{children:["Please check out the ",(0,a.jsx)(n.a,{href:"https://gitlab.com/QEF/q-e/-/wikis/Developers/CMake-build-system",children:"official documentation"})," for more\ndetails. It requires ",(0,a.jsx)(n.code,{children:"cmake"})," version ",(0,a.jsx)(n.code,{children:"3.14"})," or later."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"apt update && apt install autoconf cmake gawk gcc g++ make\n"})}),"\n",(0,a.jsx)(n.p,{children:"I used following steps to successfully compile Quantum Espresso using 2023\nversions of Intel libraries in Ubuntu 22.04 system:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd q-e-qe-7.2\nmkdir build && cd build\ncmake -DCMAKE_C_COMPILER=mpiicc -DCMAKE_Fortran_COMPILER=mpiifort -DQE_ENABLE_SCALAPACK=ON ..\nmake -j4\nmv bin ..\ncd ..\nrm -rf build\n"})}),"\n",(0,a.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://nusit.nus.edu.sg/services/getting-started/introductory-guide-for-new-hpc-users/",children:"https://nusit.nus.edu.sg/services/getting-started/introductory-guide-for-new-hpc-users/"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://help.nscc.sg/pbspro-quickstartguide/",children:"https://help.nscc.sg/pbspro-quickstartguide/"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=doudMLEaq3w",children:"https://www.youtube.com/watch?v=doudMLEaq3w"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1289:function(e,n,l){l.d(n,{Z:function(){return s}});let s=l.p+"assets/images/intel-link-line-adviser-c3f2cc310ec8d4c9ea5d90e49a5e32b9.webp"}}]);