#!/bin/bash
if [ $# -eq 0 ]
  then
    echo $'Usage: \n./deploy.sh \"<comment>\"'
    exit 1
fi
npm run build

git add .
git commit -am "$1"
git push
