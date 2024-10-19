#!/bin/bash
sed -i 's|baseUrl:.*|baseUrl: "/",|I' docusaurus.config.js
npm run build
