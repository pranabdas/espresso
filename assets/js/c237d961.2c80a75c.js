"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[177],{4257:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>l,toc:()=>f});var c=s(5893),r=s(1151),a=s(9286);const i='&control\n  calculation = "scf",\n  prefix = "cu",\n  pseudo_dir = "../pseudos/",\n  outdir = "/tmp/cu/"\n/\n\n&system\n  ibrav = 2,\n  celldm(1) = 6.678,\n  nat = 1,\n  ntyp = 1,\n  ecutwfc = 40,\n  ecutrho = 300,\n  occupations = "smearing",\n  smearing = "mp",\n  degauss = 0.01,\n  nbnd = 16\n/\n\n&electrons\n  conv_thr = 1e-9,\n/\n\nATOMIC_SPECIES\nCu 63.546 Cu_ONCV_PBE-1.0.oncvpsp.upf\n\nATOMIC_POSITIONS alat\nCu 0.00 0.00 0.00\n\nK_POINTS automatic\n8 8 8 1 1 1\n',t='&control\n  calculation = "bands",\n  prefix = "cu",\n  pseudo_dir = "../pseudos/",\n  outdir = "/tmp/cu/"\n/\n\n&system\n  ibrav = 2,\n  celldm(1) = 6.678,\n  nat = 1,\n  ntyp = 1,\n  ecutwfc = 40,\n  ecutrho = 300,\n  occupations = "smearing",\n  smearing = "mp",\n  degauss = 0.01,\n  nbnd = 16\n/\n\n&electrons\n  conv_thr = 1e-9,\n/\n\nATOMIC_SPECIES\nCu 63.546 Cu_ONCV_PBE-1.0.oncvpsp.upf\n\nATOMIC_POSITIONS alat\nCu 0.00 0.00 0.00\n\nK_POINTS automatic\n30 30 30 0 0 0\n',o='&fermi\n  outdir = "/tmp/cu/"\n  prefix = "cu"\n/\n',u={title:"Fermi Surface"},p=void 0,l={id:"hands-on/fermi-surface",title:"Fermi Surface",description:"Here we will calculate Fermi surface of copper. First step is to perform self-",source:"@site/docs/hands-on/fermi-surface.mdx",sourceDirName:"hands-on",slug:"/hands-on/fermi-surface",permalink:"/espresso/hands-on/fermi-surface",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/fermi-surface.mdx",tags:[],version:"current",frontMatter:{title:"Fermi Surface"},sidebar:"docs",previous:{title:"Dielectric constant",permalink:"/espresso/hands-on/epsilon"},next:{title:"Phonon dispersion",permalink:"/espresso/hands-on/phonon"}},d={},f=[];function m(n){const e={code:"code",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.p,{children:"Here we will calculate Fermi surface of copper. First step is to perform self-\nconsistent field calculation."}),"\n","\n",(0,c.jsx)(a.Z,{language:"bash",title:"src/cu/pw.scf.cu.in",showLineNumbers:!0,children:i}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 pw.x -in pw.scf.cu.in > pw.scf.cu.out\n"})}),"\n",(0,c.jsxs)(e.p,{children:["Next we perform ",(0,c.jsx)(e.code,{children:"bands"})," calculation over dense uniform k-grid:"]}),"\n","\n",(0,c.jsx)(a.Z,{language:"bash",title:"src/cu/pw.bands.cu.in",showLineNumbers:!0,children:t}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 pw.x -in pw.bands.cu.in > pw.bands.cu.out\n"})}),"\n",(0,c.jsxs)(e.p,{children:["Finally, we process the data with ",(0,c.jsx)(e.code,{children:"fs.x"})," post processing tool. Below is the\ninput file:"]}),"\n","\n","\n",(0,c.jsx)(a.Z,{language:"bash",title:"src/cu/fs.cu.in",showLineNumbers:!0,children:o}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 fs.x -in fs.cu.in > fs.cu.out\n"})}),"\n",(0,c.jsxs)(e.p,{children:["We can visualize the output file ",(0,c.jsx)(e.code,{children:"cu_fs.bxsf"})," using xcrysdens program:"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"xcrysden --bxsf cu_fs.bxsf\n"})}),"\n",(0,c.jsxs)("picture",{children:[(0,c.jsx)("source",{type:"image/webp",srcSet:s(7186).Z}),(0,c.jsx)("img",{src:s(1362).Z,alt:"Fermi-surface-copper"})]})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(m,{...n})}):m(n)}},1362:(n,e,s)=>{s.d(e,{Z:()=>c});const c=s.p+"assets/images/fs-cu-3eeb96a32a3afdd5dd05ff5a84bb5e6a.png"},7186:(n,e,s)=>{s.d(e,{Z:()=>c});const c=s.p+"assets/images/fs-cu-e7a55e23976defc1b5ee843fb35db30b.webp"}}]);