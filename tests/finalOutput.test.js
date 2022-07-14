import { finalOutput } from "../main";

test('output final text using participant names and percentage', () => {

    let firstParticipant = "Jack";
    let secondParticipant = "Jill";
    let firstOutput = finalOutput(firstParticipant, secondParticipant, '60');

    expect(firstOutput).toBe('Jack matches Jill 60%');

});