import { matchParticipants } from "../main"; 

test('match the participants', () => {

    let firstParticipant = "Jack";
    let secondParticipant = "Jill";

    expect(matchParticipants("Jack", "Jill")).toEqual("Jack matches Jill 60%");

    let thirdParticipant = "Kimberley";
    let fourthParticipant = "Jason";

    expect(matchParticipants("Kimberley", "Jason")).toEqual("Kimberley matches Jason 30%");

});