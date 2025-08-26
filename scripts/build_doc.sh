#!/bin/bash

sed -i 's|rgba(239,[[:space:]]*83,[[:space:]]*80,[[:space:]]*0.56)|rgba(239, 83, 80, 0.9)|gI' node_modules/prism-react-renderer/dist/index.js
npm run build
for file in `find build/assets/css -type f -name '*.css'`; do
    npx -y purgecss \
        --css ${file} \
        --content "build/**/*.{html,js}" \
        --variables \
        --keyframes \
        --output ${file}
done
