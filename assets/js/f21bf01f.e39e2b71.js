"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[7277],{410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>f,toc:()=>m});var s=t(4848),i=t(8453),o=t(1432);t(6025);const a='# load the pw.x input from file\nload_fromPWI fe_scf_fm.in\n\n# dual is the ratio ecutrho/ecutwfc\nforeach dual { 4 8 12 } {\n\n    set fid [open etot-vs-ecutwfc.dual$dual.dat w]\n\n    foreach ecutwfc [seq 25 5 50] {\n\n        set name pw.Fe.scf.ecutwfc-$ecutwfc.dual-$dual\n\n        SYSTEM "ecutwfc = $ecutwfc\n                ecutrho = $ecutwfc*$dual "\n        runPW $name.in\n\n        set Etot [pwo_totene $name.out]\n        puts $fid "$ecutwfc $Etot"\n    }\n\n    close $fid\n}\n',c="load_fromPWI fe_scf_fm.in\n\nSYSTEM \" ecutwfc = 40\n         ecutrho = 320 \"\n\nset name Fe\n\nrunPW pw.$name.scf.in\n\nCONTROL { calculation = 'nscf' }\nSYSTEM  { occupations = 'tetrahedra' ,\n          degauss = ,  ! this is how variable is unset in PWTK\n}\nK_POINTS automatic {\n    12 12 12   1 1 1\n}\nrunPW pw.$name.nscf.in\n\nDOS \"\n    fildos = '$name.dos.dat'\n    Emin = 5.0\n    Emax = 20.0,\n    DeltaE = 0.1\n\"\nrunDOS dos.$name.in\n\nPROJWFC \"\n    filpdos = '$name.pdos.dat'\n    Emin = 5.0\n    Emax = 20.0,\n    DeltaE = 0.1\n\"\nrunPROJWFC projwfc.$name.in\n",r="# this is a specification for crystal structure\nCRYSTAL\n\n# primitive lattice vectors (in Angstroms)\nPRIMVEC\n    2.8681404710    0.0000000000    0.0000000000\n    0.0000000000    2.8681404710    0.0000000000\n    0.0000000000    0.0000000000    2.8681404710\n\n# conventional lattice vectors (in Angstroms)\nCONVVEC\n    2.8681404710    0.0000000000    0.0000000000\n    0.0000000000    2.8681404710    0.0000000000\n    0.0000000000    0.0000000000    2.8681404710\n\n# First number stands for number of atoms in primitive cell\n# the second number is always 1 for PRIMCOORD coordinates\n# followed by atomic coordinates (in Angstroms) and forces:\n# AtNum   X Y Z   Fx Fy Fz\nPRIMCOORD\n 2  1\n 26  0.0000000000  0.0000000000  0.0000000000    0.00  0.00  0.01\n 26  1.4340702350  1.4340702350  1.4340702350    0.00  0.00 -0.01\n",l={title:"Magnetic system: bulk iron",sidebar_label:"Fe (magnetic)"},d=void 0,f={id:"hands-on/fe",title:"Magnetic system: bulk iron",description:"I am following this example from the [ICTP online school 2021](",source:"@site/docs/hands-on/fe.mdx",sourceDirName:"hands-on",slug:"/hands-on/fe",permalink:"/espresso/hands-on/fe",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/fe.mdx",tags:[],version:"current",frontMatter:{title:"Magnetic system: bulk iron",sidebar_label:"Fe (magnetic)"},sidebar:"docs",previous:{title:"GaAs",permalink:"/espresso/hands-on/GaAs"},next:{title:"Ni (spin pol. bands)",permalink:"/espresso/hands-on/ni"}},h={},m=[{value:"Convergence test for USPP",id:"convergence-test-for-uspp",level:2},{value:"Density of states calculation",id:"density-of-states-calculation",level:2},{value:"Paramagnetism",id:"paramagnetism",level:2},{value:"Visualizing magnetic moments",id:"visualizing-magnetic-moments",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["I am following this example from the ",(0,s.jsx)(n.a,{href:"https://gitlab.com/QEF/materials-for-max-qe2021-online-school",children:"ICTP online school 2021"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["We will perform the SCF KS orbital calculations on magnetic (",(0,s.jsx)(n.code,{children:"nspin=2"}),") iron.\nSince the d-orbitals of Fe atom are localized/ hard, we will use ultra-soft\npseudo potential (USPP)."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If we have crystal structure with only one atom per unit cell, or only one type\nof atoms, the only possible ordering is ferromagnetic. In such cases, we need to\nform supercell with more number of atoms or label multiple atoms separately, so\nthat their magnetic orientation could be different thus having the possibility\nof ferro- or antiferromagnetic final states."})}),"\n",(0,s.jsx)(n.p,{children:"Run the SCF calculations for both ferro- and antiferromagnetic structures.\nNotice that for ferromagnetic, we have BCC structure with only one type of atom,\nwhile we use simple cubic structure for antiferromagnetic case with two\ndifferent atomic labels. For antiferromagnetic calculation, we need to start\nwith opposite initial spins."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pw.x -i pw.scf.fe_fm.in > pw.scf.fe_fm.out\npw.x -i pw.scf.fe_afm.in > pw.scf.fe_afm.out\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In case of the AFM calculation, if we have started with FM (say, for both atom\ntypes ",(0,s.jsx)(n.code,{children:"starting_magnetization=0.6"})," ), the calculation would still converge to\nAFM state as it is the true ground state for this system, albeit it would take\nmore iteration to converge. If a system has complex potential surface with local\nminima, it it possible to get different final state magnetization depending on\nthe starting magnetization. In such cases, a stricter convergence criteria might\nhelp."]})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["In case of ultrasoft pseudo potentials, the Quantum Espresso default of\n",(0,s.jsx)(n.code,{children:"ecutrho"})," 4 times of ",(0,s.jsx)(n.code,{children:"ecutoff"})," is not sufficient. We need to set ",(0,s.jsx)(n.code,{children:"ecutrho"})," 8 or\neven 12 times that of ",(0,s.jsx)(n.code,{children:"ecutoff"}),". We must test the convergence for our set\nvalues."]})}),"\n",(0,s.jsx)(n.h2,{id:"convergence-test-for-uspp",children:"Convergence test for USPP"}),"\n",(0,s.jsx)(n.p,{children:"Below is the PWTK script file:"}),"\n","\n",(0,s.jsx)(o.A,{language:"bash",title:"src/fe/fe_ecut.pwtk",showLineNumbers:!0,children:a}),"\n",(0,s.jsx)(n.p,{children:"Run the script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pwtk fe_ecut.pwtk\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"fe-convergence",src:t(4897).A+"",width:"873",height:"553"})}),"\n",(0,s.jsx)(n.h2,{id:"density-of-states-calculation",children:"Density of states calculation"}),"\n",(0,s.jsx)(n.p,{children:"PWTK script to calculate DOS and p-DOS:"}),"\n","\n",(0,s.jsx)(o.A,{language:"bash",title:"src/fe/fe_dos.pwtk",showLineNumbers:!0,children:c}),"\n",(0,s.jsx)(n.p,{children:"Below is the plots of total and projected density of states."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"fe-dos",src:t(8990).A+"",width:"769",height:"545"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"fe-pdos",src:t(7886).A+"",width:"769",height:"545"})}),"\n",(0,s.jsxs)(n.p,{children:["Also see bandstructure of Fe with and without ",(0,s.jsx)(n.a,{href:"soc#bandstructure-of-fe-with-soc",children:"SOC"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"paramagnetism",children:"Paramagnetism"}),"\n",(0,s.jsx)(n.p,{children:"Paramagnetic materials have fluctuating magnetic moments that may not be\nproperly described DFT. One approach is to model paramagnetic materials in DFT\ncalculation by building a large supercell and assign randomly oriented magnetic\nmoments."}),"\n",(0,s.jsx)(n.p,{children:"Also note that DFT assumes zero temperature, so it makes sense to perform FM or\nAFM calculation for magnetic systems."}),"\n",(0,s.jsx)(n.h2,{id:"visualizing-magnetic-moments",children:"Visualizing magnetic moments"}),"\n",(0,s.jsxs)(n.p,{children:["We can use ",(0,s.jsx)(n.a,{href:"http://www.xcrysden.org",children:"XCrySDen"})," to visualize the orientation of\nmagnetic moments. XCrySDen cannot directly read the Quantum Espresso output\nfiles for magnetic moment vectors, instead we need to create the input ",(0,s.jsx)(n.code,{children:".xsf"}),"\nfile with magnetic moments as force vector. You can also change the background\ncolor from black from the Palette Menu which is located in the left of File\nmenu."]}),"\n","\n",(0,s.jsx)(o.A,{language:"bash",title:"src/fe/fe.xsf",showLineNumbers:!0,children:r}),"\n",(0,s.jsxs)(n.p,{children:["Open the file from XCrySDen Menu: ",(0,s.jsx)(n.strong,{children:"File \u2192 Open Structure \u2192 Open XSF"}),". Then go\nto ",(0,s.jsx)(n.strong,{children:"Display"})," menu and select ",(0,s.jsx)(n.strong,{children:"Forces"}),". If you want to adjust scaling for the\nforce vectors, go to ",(0,s.jsx)(n.strong,{children:"Modify \u2192 Force Settings"})," and set suitable Length factor."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"fe-magnetic-structure",src:t(3706).A+"",width:"670",height:"670"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4897:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/fe-convergence-1caa80f7711acec59f3b9525d07b8390.webp"},8990:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/fe-dos-45bd46db4a4f74412e22c64fb9c918d2.webp"},3706:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/fe-magnetic-structure-1ce9f8ece4ab92800fa14b0eccf00352.webp"},7886:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/fe-pdos-a6849fd938c58dcc54c60d2f9dd711c5.webp"}}]);