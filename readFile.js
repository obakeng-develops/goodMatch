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
    }

}