#!/bin/bash

let couter=0 # bashism

while (sleep 10)
do {
    let counter++ # more bashisms
    echo "Pulling ($counter)"
    git pull
} done
