"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[16],{7975:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return d}});var n=a(7462),s=a(3366),i=(a(7294),a(3905)),o=a(3066),r=["components"],p={title:"Density of States calculation",sidebar_label:"DOS calculation"},l=void 0,m={unversionedId:"hands-on/dos",id:"hands-on/dos",title:"Density of States calculation",description:"Before we can run the Density of States (DOS) calculation, we need",source:"@site/docs/hands-on/dos.mdx",sourceDirName:"hands-on",slug:"/hands-on/dos",permalink:"/espresso/hands-on/dos",draft:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/dos.mdx",tags:[],version:"current",frontMatter:{title:"Density of States calculation",sidebar_label:"DOS calculation"},sidebar:"docs",previous:{title:"Structure optimization",permalink:"/espresso/hands-on/structure-optimization"},next:{title:"Bandstructure",permalink:"/espresso/hands-on/bands"}},c={},d=[],u={toc:d};function h(e){var t=e.components,p=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Before we can run the Density of States (DOS) calculation, we need"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Perform fixed-ion self consistent filed (scf) calculation."),(0,i.kt)("li",{parentName:"ol"},"Fix the parameters and run non-self consistent field (nscf) calculation with\ndenser k-point grid.")),(0,i.kt)("p",null,"I have created a new input file (",(0,i.kt)("inlineCode",{parentName:"p"},"si_scf_dos.in"),") which is very much same as our\nprevious scf input file except some parameters are modified. You can find all\nthe input files in my ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/espresso/"},"GitHub repository"),".\nWe used the lattice constant value that we obtained from the relaxation\ncalculation. We should not directly use the experimental/real lattice constant\nvalue. Depending on the method and pseudo-potential, it might result stress in\nthe system. We have increased the ",(0,i.kt)("inlineCode",{parentName:"p"},"ecutwfc")," to have better precision. We run the\nscf calculation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x < si_scf_dos.in > si_scf_dos.out\n")),(0,i.kt)("p",null,"Next, we have prepared the input file for the ",(0,i.kt)("inlineCode",{parentName:"p"},"nscf")," calculation. Where is have\nadded ",(0,i.kt)("inlineCode",{parentName:"p"},"occupations")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"&system")," card as ",(0,i.kt)("inlineCode",{parentName:"p"},"tetrahedra")," (appropriate for DOS\ncalculation). We have increased the number of k-points to 12 \xd7 12 \xd7 12 with\nautomatic option. Also specify ",(0,i.kt)("inlineCode",{parentName:"p"},"nosym = .TRUE.")," to avoid generation of\nadditional k-points in low symmetry cases. ",(0,i.kt)("inlineCode",{parentName:"p"},"outdir")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," must be same as\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"scf")," step, some of the inputs and output are read from previous step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x < si_nscf_dos.in > si_nscf_dos.out\n")),(0,i.kt)("p",null,"Now our final step is to calculate the density of states. The DOS input file as\nfollows:"),(0,i.kt)(o.Z,{language:"bash",title:"src/silicon/si_dos.in",showLineNumbers:!0,mdxType:"CodeBlock"},"&DOS\n  prefix='silicon',\n  outdir='./tmp/',\n  fildos='si_dos.dat',\n  emin=-9.0,\n  emax=16.0\n/\n"),(0,i.kt)("p",null,"We run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dos.x < si_dos.in > si_dos.out\n")),(0,i.kt)("p",null,"The DOS data in the ",(0,i.kt)("inlineCode",{parentName:"p"},"si_dos.dat")," file that we specified in our input file. We\ncan plot the DOS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="notebooks/silicon-dos.ipynb" showLineNumbers',title:'"notebooks/silicon-dos.ipynb"',showLineNumbers:!0},"import matplotlib.pyplot as plt\nfrom matplotlib import rcParamsDefault\nimport numpy as np\n%matplotlib inline\n\n# load data\nenergy, dos, idos = np.loadtxt('../src/silicon/si_dos.dat', unpack=True)\n\n# make plot\nplt.figure(figsize = (12, 6))\nplt.plot(energy, dos, linewidth=0.75, color='red')\nplt.yticks([])\nplt.xlabel('Energy (eV)')\nplt.ylabel('DOS')\nplt.axvline(x=6.642, linewidth=0.5, color='k', linestyle=(0, (8, 10)))\nplt.xlim(-6, 16)\nplt.ylim(0, )\nplt.fill_between(energy, 0, dos, where=(energy < 6.642), facecolor='red', alpha=0.25)\nplt.text(6, 1.7, 'Fermi energy', fontsize= med, rotation=90)\nplt.show()\n")),(0,i.kt)("picture",null,(0,i.kt)("source",{type:"image/webp",srcset:a(4645).Z}),(0,i.kt)("img",{src:a(1280).Z,alt:"silicon-dos"})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For a set of calculation, we must keep the ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," same. For example, the\n",(0,i.kt)("strong",{parentName:"p"},"nscf")," or ",(0,i.kt)("strong",{parentName:"p"},"bands")," calculation uses the wavefunction calculated by the\n",(0,i.kt)("strong",{parentName:"p"},"scf")," calculation. When performing different calculations, for example you\nchange a parameter and want to see the changes, you must use different output\nfolder or unique ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," for different calculations so that the outputs do not\nget mixed."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Sometimes it is important to sample the ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0393")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Gamma")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"\u0393")))))," point for DOS calculation\n(e.g., the conducting bands cross the Fermi surface only at ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0393")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Gamma")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"\u0393")))))," point). In\nsuch cases, we need to use odd k-grid (e.g., 9\u27159\u27155)."))))}h.isMDXComponent=!0},1280:function(e,t,a){t.Z=a.p+"assets/images/silicon-dos-9d095ddb8c71cd03ee572f2fe9f8356c.png"},4645:function(e,t,a){t.Z=a.p+"assets/images/silicon-dos-edf95503cd6527685b73ada318c5cf68.webp"}}]);