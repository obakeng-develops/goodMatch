import { matchParticipants } from "../utils"; 

test('match the participants', () => {

    let firstParticipant = "Jack";
    let secondParticipant = "Jill";
    let result = matchParticipants(firstParticipant, secondParticipant);

    expect(result).toEqual("Jack matches Jill 60%");

    let thirdParticipant = "Kimberley";
    let fourthParticipant = "Jason";

    expect(matchParticipants(thirdParticipant, fourthParticipant)).toBe("Kimberley matches Jason 30%");

    let fifthParticipant = "Otshepeng";
    let sixthParticipant = "Tommy";

    expect(matchParticipants(fifthParticipant, sixthParticipant)).toBe("Otshepeng matches Tommy 93%, good match");

});