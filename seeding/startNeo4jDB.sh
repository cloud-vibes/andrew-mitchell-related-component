#!/bin/bash    
path="/Volumes/Micro SD:/SDC DB/Neo4j/neo4j"
docker run --publish=7474:7474 --publish=7687:7687 --volume="${path}/data" --volume="${path}/logs" neo4j:3.5.3