#!/bin/bash

let couter=0 # bashism

while (sleep 10)
do {
    let counter++ # more bashisms
    result=$(git pull | tail -n 1 2>/dev/null)
    echo "Pulled (${counter}): ${result}"
} done
