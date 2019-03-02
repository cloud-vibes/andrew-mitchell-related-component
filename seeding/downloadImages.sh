#!/bin/bash
# Basic while loop
counter=1
while [ $counter -le 1000 ]
do
touch "/Users/Andrew/Desktop/SDC/${counter}example.jpg"
curl http://lorempixel.com/400/200/ >  "/Users/Andrew/Desktop/SDC/${counter}example.jpg"
((counter++))
done
echo All done
