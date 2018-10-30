#!/bin/bash

npm run build

git add dist/*
git commit -m "jenkins build"
git push
