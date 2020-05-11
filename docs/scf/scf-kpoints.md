### Convergence test against number of k-points 

We can run similar convergence test against other parameter, and choose the best value of that particular parameter. Here we will try to calculate number of k-points in the Monkhorst-Pack mesh. 
```
load_fromPWI si.scf.in
  
set fid [open Etot-vs-kpoint.dat w]

foreach k { 2 4 6 8 } {

    set name si.scf.kpoints-$k

    K_POINTS automatic "$k $k $k 1 1 1"
    runPW $name.in

    set Etot [::pwtk::pwo::totene $name.out]
    puts $fid "$k $Etot"
}

close $fid
```

![Etot-vs-kpoints](../img/Etot-vs-kpoints.png)  
