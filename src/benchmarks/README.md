# Quantum ESPRESSO Benchmarks

## Setup
The pseudopotential files under `benchmarks` are stored using Git-LFS. Download
LFS objects with:
```
git lfs pull
```

## Useful information to save
- Processor info (`cat /proc/cpuinfo > cpuinfo.txt`)
- Library linking info (`ldd $(command -v pw.x) > lib-info.txt`)
- Quantum ESPRESSO output (`pw.out`).

## Benchmarks

### Fe-Graphene

### CuO

| Machine               | Build type | # CPU | Wall time (s) |
|:----------------------|:----------:|:-----:|--------------:|
| Intel Xeon @ 3.10GHz  | Intel      |4      | 514.75        |
| Intel Xeon @ 3.10GHz  | GNU        |4      | 728.49        |
