#!/usr/bin/env bash
# Download Quantum ESPRESSO INPUT_*.html docs.
set -euo pipefail

base_url="https://www.quantum-espresso.org/Doc"
prefix="INPUT_"
suffix=".html"
output_directory="${1:-resources}"

doc_names=(
    BANDS
    BAND_INTERPOLATION
    CP
    CPPP
    D3HESS
    DOS
    DYNMAT
    Davidson
    EELS
    HP
    LD1
    Lanczos
    MATDYN
    Magnon
    NEB
    OSCDFT
    OSCDFT_ET
    OSCDFT_PP
    PH
    POSTAHC
    PP
    PPACF
    PPRISM
    PROJWFC
    PW
    PWCOND
    Q2R
    Spectrum
    bgw2pw
    kcw
    molecularpdos
    pw2bgw
    pw2gw
    pw2wannier90
    wannier2pw
)

mkdir -p "${output_directory}"

for doc_name in "${doc_names[@]}"; do
    file_name="${prefix}${doc_name}${suffix}"
    url="${base_url}/${file_name}"
    echo "Downloading ${url}"
    curl -fsSL "${url}" -o "${output_directory}/${file_name}" || echo "  failed: ${url}" >&2
done
