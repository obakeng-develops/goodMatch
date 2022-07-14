import { 
    matchParticipants, 
    finalOutput, 
    findPercentage, 
    createFrequencyResult, 
    createCharMapping 
} from "../main";

test('creates a character mapping from string', () => {

    let fullText = "Magic matches Johnson";

    expect(createCharMapping(fullText)).toEqual({
        
    });

});