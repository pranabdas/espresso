#!/bin/bash
# extracts gap values form scf output file
printf "Output file: "
read OUTPUT_FILE
etot=`grep ! ${OUTPUT_FILE} | tail -1 | awk '{print $5}'`
gap=`grep highest ${OUTPUT_FILE} | tail -1 | awk '{print $8-$7}'`
gapG=`grep -A 2 "k = 0.0000 0.0000 0.0000" ${OUTPUT_FILE} | tail -1 | awk '{print $5-$4}'`
W=`grep -A 2 "k = 0.0000 0.0000 0.0000" ${OUTPUT_FILE} | tail -1 | awk '{print $4-$1}'`
echo "  Etot [Ry]     Eg(indirect) [eV]  Eg(direct) [eV]  Band Width [eV]"
echo $nq $etot "       " $gap "        " $gapG "          " $W
