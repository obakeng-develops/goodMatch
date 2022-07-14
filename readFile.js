import { matchParticipants } from "../matchGood/main.js";
import * as fs from 'fs';
import * as path from 'path';
import readline from 'readline;'
import { rawListeners } from "process";

function readFile(fileName) {

    fs.exists(fileName, (isExist) => {
        if(!isExist) {
            console.error("File does not exist.");
            return;
        } else {
            if (path.extname(fileName) == '.csv') {

                const stream = fs.createReadStream(fileName, 'utf8');
                
                stream.on('data', (chunk) => {
                    console.log("Parsing and writing data.");
                    let content = chunk.split("\r\n");
                    let females = new Set();
                    let males = new Set();

                    fillSets(females, males, content);

                    listMatches(females, males);
                });

                stream.on('error', (error) => {
                    console.error(`Error: ${error.message}`);
                });

                stream.on('close', () => {
                    console.log('Data parsing and writing complete. Matches have been written to output.txt');
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
            write('output.txt', matchParticipants(femaleNames[i], maleNames[i]));
        }

    }
}

function write(filePath, content) {

    const writeableStream = fs.createWriteStream(filePath, { flags: 'a' });

    writeableStream.on('error', (error) => {
        console.log(`An error occurred while writing to the file. Error: ${error.message}`);
    });

    writeableStream.write(content, 'utf-8', () => {
        console.log("Writing line");
    });

    writeableStream.on('finish', () => {
        console.log("Done writing content.")
    })

}

export { readFile, fillSets, listMatches };

var data = readFile('input.csv');