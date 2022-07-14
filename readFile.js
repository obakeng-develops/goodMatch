import { matchParticipants } from "../matchGood/main.js";
import * as fs from 'fs';

function readFile() {
    fs.readFile('input.csv', 'utf-8', (err, data) => {

        let content = data.split("\r\n");
        let females = new Set();
        let males = new Set();

        fillSets(females, males, content);

        listMatches(females, males);
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
            console.log(matchParticipants(femaleNames[i], maleNames[i]));
        }

    } else {

        for (let i = 0; i < femaleNames.length; i++) {
            console.log(matchParticipants(femaleNames[i], maleNames[i]));
        }

    }
}

export { readFile, fillSets, listMatches };

readFile();