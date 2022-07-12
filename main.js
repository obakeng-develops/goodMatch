// creates a character frequency in creation order 
let createCharMapping = (text) => {

    charMap = {};

    for (char of text.replace(/\+s/g, '')) {
        if (char in charMap) {
            charMap[char] += 1;
        } else {
            charMap[char] = 1;
        }
    }

    return charMap

}

function matchParticipants(participant1, participant2) {

    let fullText = participant1 + " matches " + participant2;
    let charMapping = createCharMapping(fullText);
    let frequencyResult = createFrequencyResult(charMapping);
    let percentage = findPercentage(0, frequencyResult.length - 1, frequencyResult);
    finalOutput(participant1, participant2, percentage);
}