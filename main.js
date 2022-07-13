// creates a character frequency in creation order 
let createCharMapping = (text) => {

    charMap = {};

    for (char of text.replace(/\s+/g, '')) {
        if (char in charMap) {
            charMap[char] += 1;
        } else {
            charMap[char] = 1;
        }
    }

    return charMap

}

// creates an initial number result from the character frequency map
let createFrequencyResult = (characterMap) => {

    firstNumber = "";

    for (key in characterMap) {
        firstNumber += characterMap[key]
    }

    return firstNumber

}

// find the percentage by adding the firstNumber recursively using two pointers - left & right
let findPercentage = (left, right, stringResult) => {
 
    if (stringResult.length == 2){
        return stringResult
    }

    let final = "";

    while (left < right) {
        let addNums = Number(stringResult[left]) + Number(stringResult[right]);

        final += String(addNums);

        left += 1
        right -= 1

        if (left == right) {
            final += stringResult[left]
        }
    }

    return findPercentage(0, final.length - 1, final);

}

let finalOutput = (participant1, participant2, percentage) => {

    let finalText = "";

    if (percentage >= 80) {
        finalText = participant1 + " matches " + participant2 +  " " + percentage +"%, good match";
    } else {
        finalText = participant1 + " matches " + participant2 + " " + percentage +  "%";
    }

    console.log(finalText);

}

function matchParticipants(participant1, participant2) {

    let fullText = participant1 + " matches " + participant2;
    let charMapping = createCharMapping(fullText);
    let frequencyResult = createFrequencyResult(charMapping);
    let percentage = findPercentage(0, frequencyResult.length - 1, frequencyResult);
    finalOutput(participant1, participant2, percentage);
}

matchParticipants("Jack", "Jill");