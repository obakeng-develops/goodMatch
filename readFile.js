import { matchParticipants } from "../matchGood/main.js";
import * as fs from 'fs';
import * as path from 'path';
import { readline } from 'readline';

async function readFile(fileName) {

    fs.exists(fileName, (isExist) => {
        if(!isExist) {
            console.error("File does not exist.");
            return;
        } else {
            if (path.extname(fileName) == '.csv') {

                const stream = fs.createReadStream(fileName, { highWaterMark: 10000000 });
                const rLine = readline.createInterface({
                    input: stream
                });

                rLine.on('line', (line) => {
                    if (line.length == 0) {
                        console.error("The file is empty.");
                        return;
                    }

                    let content = line.split("\r\n");
                    let females = new Set();
                    let males = new Set();

                    fillSets(females, males, content);

                    listMatches(females, males);
                });
                
            } else {
                console.error("Please use a file in csv format.");
                return;
            }
        }
    });
}

function fillSets(firstSet, secondSet, dataArray) {

    for (let line in dataArray) {
        dataArray[line] = dataArray[line].split(",");
    }    

    for (let person in dataArray) {
        let [name, gender] = dataArray[person];

        gender = gender.replace(/\s+/g, '');

        if (gender === 'f') {
            firstSet.add(name);
        }

        if (gender === 'm') {
            secondSet.add(name);
        }
    }
}

function listMatches(firstSet, secondSet) {
    
    let femaleNames = Array.from(firstSet);
    let maleNames = Array.from(secondSet);

    if (femaleNames.length <= maleNames.length) {

        for (let i = 0; i < femaleNames.length; i++) {
            fs.writeFile('output.txt', matchParticipants(femaleNames[i], maleNames[i]), { flag: 'a'}, err => {
                if(err) {
                    console.error(err);
                    return;
                }
            });
        }

    } else {

        for (let i = 0; i < femaleNames.length; i++) {
            fs.writeFile('output.txt', matchParticipants(femaleNames[i], maleNames[i]), { flag: 'a' }, err => {
                if(err) {
                    console.error(err);
                    return;
                }
            });
        }

    }
}

export { readFile, fillSets, listMatches };

var data = readFile('input.csv');