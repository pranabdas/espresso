"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[452],{9463:function(a,n,e){e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var t=e(7462),s=e(3366),i=(e(7294),e(3905)),r=e(814),p=["components"],o={title:"Spin-Orbit Coupling",keywords:["Spin orbit coupling","SOC","SOC calculation","SOC calculation in DFT","SOC calculation using Quantum Espresso","Non collinear spin calculation","Bandstructure calculation for GaAs"]},m=void 0,l={unversionedId:"hands-on/soc",id:"hands-on/soc",title:"Spin-Orbit Coupling",description:"In oder to consider spin orbit coupling effect in our electronic structure",source:"@site/docs/hands-on/soc.mdx",sourceDirName:"hands-on",slug:"/hands-on/soc",permalink:"/espresso/hands-on/soc",draft:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/soc.mdx",tags:[],version:"current",frontMatter:{title:"Spin-Orbit Coupling",keywords:["Spin orbit coupling","SOC","SOC calculation","SOC calculation in DFT","SOC calculation using Quantum Espresso","Non collinear spin calculation","Bandstructure calculation for GaAs"]},sidebar:"docs",previous:{title:"DFT+U calculation",permalink:"/espresso/hands-on/dft-u"},next:{title:"Bi2Se3 (TI)",permalink:"/espresso/hands-on/Bi2Se3"}},c={},u=[{value:"Non collinear spin",id:"non-collinear-spin",level:2},{value:"Strategy for convergence",id:"strategy-for-convergence",level:2},{value:"Bandstructure of Fe with SOC",id:"bandstructure-of-fe-with-soc",level:2},{value:"SOC calculation for GaAs",id:"soc-calculation-for-gaas",level:2}],d={toc:u};function h(a){var n=a.components,o=(0,s.Z)(a,p);return(0,i.kt)("wrapper",(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In oder to consider spin orbit coupling effect in our electronic structure\ncalculation in quantum espresso, we need to use a full relativistic pseudo\npotential. Following settings are needed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"&SYSTEM")," card:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"&SYSTEM\n    ...\n    noncolin = .true.\n    lspinorb = .true.\n    ...\n/\n")),(0,i.kt)("h2",{id:"non-collinear-spin"},"Non collinear spin"),(0,i.kt)("p",null,"In simple spin polarized calculation (",(0,i.kt)("inlineCode",{parentName:"p"},"nspin=2"),"), the spin quantum number (up or\ndown) is considered in the calculation. In non-collinear case, the spin has more\ndegrees of freedom, and can be oriented in any direction. Non-collinear\nmagnetism is quite common in nature, where the spins are not parallel\n(ferromagnetic) or anti-parallel (antiferromagnetic), rather they orient in\nspirals, helicoids, canted or disordered. Non-collinear magnetism can occur\nbecause of geometric frustration of magnetic interaction. It can also occur due\nto the magnetocrystalline anisotropy which is the result of interaction between\nthe spin and lattice interaction. This relativistic effect comes via spin-orbit\ncoupling."),(0,i.kt)("p",null,"We can constrain the magnetic moment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"&SYSTEM\n  ...\n  constrained_magnetization = 'atomic direction'\n  ...\n/\n")),(0,i.kt)("p",null,"Starting magnetization can be specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"angle1")," (angle with ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"z")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z")))))," axis) and\n",(0,i.kt)("inlineCode",{parentName:"p"},"angle2")," (angle of projection in ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"x"),(0,i.kt)("mi",{parentName:"mrow"},"y")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"xy")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),"-plane and with ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"x")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),"-axis). Also check the\npenalty function (",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"\u03bb")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\lambda")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"\u03bb"))))),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"&SYSTEM\n  ...\n  angle1(i) = 0.0d0\n  angle2(i) = 0.0d0\n  lambda = 0.5\n  ...\n/\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"i")," is the index of the atom in ",(0,i.kt)("inlineCode",{parentName:"p"},"ATOMIC_SPECIES")," card."),(0,i.kt)("h2",{id:"strategy-for-convergence"},"Strategy for convergence"),(0,i.kt)("p",null,"Spin-orbit coupling calculations are often hard to converge. Use a smaller\n",(0,i.kt)("inlineCode",{parentName:"p"},"mixing_beta")," for such calculations. First perform a collinear calculation with\nnon-relativistic pseudopotential, and then start from the obtained charge\ndensity to perform non-colinear spin orbit calculation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"&ELECTRONS\n  ...\n  mixing_beta = 1.0000000000d-01\n  startingpot = 'file'\n/\n")),(0,i.kt)("p",null,"When starting with non-collinear calculation from an existing charge density\nfile from a collinear lsda calculation, we need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"lforcet=.true."),". It\nassumes previous density points in z direction, and rotates in the direction\nspecified by ",(0,i.kt)("inlineCode",{parentName:"p"},"angle1")," (initial magnetization angle with ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"z")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"z")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.04398em"}},"z"))))),"-axis in degrees),\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"angle2")," (angle in degrees for projections in ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"x"),(0,i.kt)("mi",{parentName:"mrow"},"y")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"xy")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"))))),"-plane and with ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"x")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),"-axis)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"&SYSTEM\n...\n  angle1(i) = 0.0\n  angle2(i) = 0.0\n  lforcet = .true.\n/\n")),(0,i.kt)("p",null,"Also, make sure that energy and charge density cutoffs are sufficient. Certain\npseudo potentials might have issues, try with pseudo potentials from a different\nlibrary. In case of metallic systems, remember to apply smearing."),(0,i.kt)("admonition",{title:"Common Errors",type:"danger"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"S matrix not positive definite:")," This error might appear due to numerical\ninstability from overlapping atoms. Check atomic positions carefully. In one my\ncalculations, this error was resolved after setting higher ",(0,i.kt)("inlineCode",{parentName:"p"},"ecutrho"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Simplified LDA+U not implemented with ",(0,i.kt)("inlineCode",{parentName:"p"},"noncol")," magnetism, use\n",(0,i.kt)("inlineCode",{parentName:"p"},"lda_plus_u_kind=1"),".")))),(0,i.kt)("h2",{id:"bandstructure-of-fe-with-soc"},"Bandstructure of Fe with SOC"),(0,i.kt)(r.Z,{language:"bash",title:"src/fe/pw.scf.fe_soc.in",showLineNumbers:!0,mdxType:"CodeBlock"},"&control\n   calculation='scf'\n   pseudo_dir = '../pseudos/',\n   outdir='./tmp/'\n   prefix='fe'\n/\n\n&system\n   ibrav = 3,\n   celldm(1) = 5.39,\n   nat= 1,\n   ntyp= 1,\n   noncolin=.true.,\n   lspinorb=.true.,\n   starting_magnetization(1)=0.3,\n   ecutwfc = 70,\n   ecutrho = 850.0,\n   occupations='smearing',\n   smearing='marzari-vanderbilt',\n   degauss=0.02\n/\n\n&electrons\n   diagonalization='david'\n   conv_thr = 1.0e-8\n   mixing_beta = 0.7\n/\n\nATOMIC_SPECIES\nFe 55.845 Fe.rel-pbe-spn-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS alat\nFe 0.0 0.0 0.0\n\nK_POINTS AUTOMATIC\n14 14 14 1 1 1\n"),(0,i.kt)("p",null,"Run the scf calculation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 8 pw.x -i pw.scf.fe_soc.in > pw.scf.fe_soc.out\n")),(0,i.kt)("p",null,"Prepare the input file for ",(0,i.kt)("inlineCode",{parentName:"p"},"nscf")," ",(0,i.kt)("inlineCode",{parentName:"p"},"bands")," calculation:"),(0,i.kt)(r.Z,{language:"bash",title:"src/fe/pw.bands.fe_soc.in",showLineNumbers:!0,mdxType:"CodeBlock"},"&control\n   calculation='bands'\n   pseudo_dir = '../pseudos/',\n   outdir='./tmp/'\n   prefix='fe'\n/\n\n&system\n   ibrav = 3,\n   celldm(1) = 5.39,\n   nat= 1,\n   ntyp= 1,\n   noncolin=.true.,\n   lspinorb=.true.,\n   starting_magnetization(1)=0.3,\n   ecutwfc = 70,\n   ecutrho = 850.0,\n   occupations='smearing',\n   smearing='marzari-vanderbilt',\n   degauss=0.02\n/\n&electrons\n   diagonalization='david'\n   conv_thr = 1.0e-8\n   mixing_beta = 0.7\n/\n\nATOMIC_SPECIES\nFe 55.845 Fe.rel-pbe-spn-rrkjus_psl.1.0.0.UPF\n\nATOMIC_POSITIONS alat\nFe 0.0 0.0 0.0\n\nK_POINTS tpiba_b\n6\n0.000  0.000  0.000  40  !gamma\n0.000  1.000  0.000  40  !H\n0.500  0.500  0.000  30  !N\n0.000  0.000  0.000  30  !gamma\n0.500  0.500  0.500  30  !P\n0.000  1.000  0.000   1  !H\n"),(0,i.kt)("p",null,"Run the ",(0,i.kt)("inlineCode",{parentName:"p"},"bands")," calculation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 8 pw.x -i pw.bands.fe_soc.in > pw.bands.fe_soc.out\n")),(0,i.kt)("p",null,"Finally post process the bandstructure data:"),(0,i.kt)(r.Z,{language:"bash",title:"src/fe/pp.bands.fe_soc.in",showLineNumbers:!0,mdxType:"CodeBlock"},"&BANDS\n    outdir='./tmp/',\n    prefix='fe',\n    filband='fe_bands_soc.dat',\n/\n"),(0,i.kt)("p",null,"In this case ",(0,i.kt)("inlineCode",{parentName:"p"},"spin_component")," has been removed and we add ",(0,i.kt)("inlineCode",{parentName:"p"},"lsigma(3)=.true."),"\nthat instructs the program to compute the expectation value for the ",(0,i.kt)("inlineCode",{parentName:"p"},"z"),"\ncomponent of the spin operator for each eigenfunction and save all values in\nthe file ",(0,i.kt)("inlineCode",{parentName:"p"},"fe.noncolin.data.3"),". All values in this case are either +1/2 or -1/2."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 8 bands.x -i pp.bands.fe_soc.in > pp.bands.fe_soc.out\n")),(0,i.kt)("picture",null,(0,i.kt)("source",{type:"image/webp",srcSet:e(2613).Z}),(0,i.kt)("img",{src:e(7623).Z,alt:"fe-soc-bands"})),(0,i.kt)("h2",{id:"soc-calculation-for-gaas"},"SOC calculation for GaAs"),(0,i.kt)("p",null,"Please check the respective ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/espresso/tree/master/src/GaAs"},"input files"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -np 8 pw.x -i pw.scf.GaAs_soc.in > pw.scf.GaAs_soc.out\nmpirun -np 8 pw.x -i pw.bands.GaAs_soc.in > pw.bands.GaAs_soc.out\nmpirun -np 8 bands.x -i pp.bands.GaAs_soc.in > pp.bands.GaAs_soc.out\n")),(0,i.kt)("picture",null,(0,i.kt)("source",{type:"image/webp",srcSet:e(783).Z}),(0,i.kt)("img",{src:e(285).Z,alt:"GaAs-soc-bands"})))}h.isMDXComponent=!0},285:function(a,n,e){n.Z=e.p+"assets/images/GaAs-soc-bands-518e9ab7f6ba3c38e10d21c1fe40ce9b.png"},783:function(a,n,e){n.Z=e.p+"assets/images/GaAs-soc-bands-e9b5feae2abd0018c3cc7a90c6e32a87.webp"},7623:function(a,n,e){n.Z=e.p+"assets/images/fe-soc-bands-de6c4f09552c8c90ba653e2309a8751a.png"},2613:function(a,n,e){n.Z=e.p+"assets/images/fe-soc-bands-78fdcffe376232aeb31d423fb4864d81.webp"}}]);