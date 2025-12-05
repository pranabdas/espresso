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
| [Intel Xeon @ 3.10GHz](CuO/reference-0/cpuinfo.txt)  | [GNU](CuO/reference-0/libinfo.txt)        |4      | [728.49](CuO/reference-0/pw.out)        |
| [Intel Xeon @ 3.10GHz](CuO/reference-1/cpuinfo.txt)  | [Intel](CuO/reference-1/libinfo.txt)      |4      | [514.75](CuO/reference-1/pw.out)        |
