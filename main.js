let createCharMapping = (text) => {
    
}

function matchParticipants(participant1, participant2) {

    let fullText = participant1 + " matches " + participant2;
    let charMapping = createCharMapping(fullText);
    let frequencyResult = createFrequencyResult(charMapping);
    let percentage = findPercentage(0, frequencyResult.length - 1, frequencyResult);
    finalOutput(participant1, participant2, percentage);
}