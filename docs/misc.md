### Miscellaneous

**How can we stop a running quantum espresso code and restart?**  
Create an empty file named `{prefix}.EXIT` in the directory where you have the input file or in the `outdir`. 
```
touch {prefix}.EXIT
```

That will stop the program on next loop, and save the state. In order to restart, set the `restart_mode` in `&CONTROL` card to `'restart'` and re-run with necessary changes.

```
&CONTROL
  ...
  restart_mode = 'restart' 
  ...
/
```
