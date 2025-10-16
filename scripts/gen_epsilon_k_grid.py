#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from itertools import product

def print_points(kx: int, ky: int, kz: int, precision: int = 8) -> None:
    fmt = f"{{:.{precision}e}} {{:.{precision}e}} {{:.{precision}e}} {{:.{precision}e}}"
    print(kx * ky * kz)
    for i, j, k in product(range(kx), range(ky), range(kz)):
        print(fmt.format(i / kx, j / ky, k / kz, 1 / (kx * ky * kz)))

if __name__ == "__main__":
    print_points(6, 6, 6, precision=8)
