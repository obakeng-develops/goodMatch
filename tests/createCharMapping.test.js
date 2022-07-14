import { 
    matchParticipants, 
    finalOutput, 
    findPercentage, 
    createFrequencyResult, 
    createCharMapping 
} from "../main";

test('creates a character mapping from string', () => {

    let fullText = "magic matches johnson";

    expect(createCharMapping(fullText)).toEqual({
        
    });

});