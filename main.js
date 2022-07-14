// creates a character frequency in creation order 
function createCharMapping(text) {

    let charMap = {};
    text = text.replace(/\s+/g, '')

    for (let char of text) {
        if (char in charMap) {
            charMap[char] += 1;
        } else {
            charMap[char] = 1;
        }
    }

    return charMap

}

// creates an initial number result from the character frequency map
function createFrequencyResult(characterMap) {

    let firstNumber = "";

    for (let key in characterMap) {
        firstNumber += characterMap[key]
    }

    return firstNumber

}

// find the percentage by adding the firstNumber recursively using two pointers - left & right
function findPercentage(left, right, stringResult) {
 
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


// final output text after finding percentage
function finalOutput (participant1, participant2, percentage) {

    let finalText = "";

    if (percentage >= 80) {
        finalText = participant1 + " matches " + participant2 +  " " + percentage +"%, good match";
    } else {
        finalText = participant1 + " matches " + participant2 + " " + percentage +  "%";
    }

    return finalText

}

function matchParticipants(participant1, participant2) {

    const re = /^[A-Za-z]+$/;

    if(!re.test(participant1) || !re.test(participant2)) {
        console.log("Error: One of the names contains non-alphabetic characters.");
        return;
    }

    let fullText = participant1 + " matches " + participant2;
    let charMapping = createCharMapping(fullText);
    let frequencyResult = createFrequencyResult(charMapping);
    let percentage = findPercentage(0, frequencyResult.length - 1, frequencyResult);
    let result = finalOutput(participant1, participant2, percentage);

    console.log(result);
}

export { matchParticipants, finalOutput, findPercentage, createFrequencyResult, createCharMapping };