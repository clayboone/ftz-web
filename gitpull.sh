#!/bin/sh

let couter=0

while (sleep 10)
do {
    let counter++
    echo "Pulling ($counter)"
    git pull
} done
