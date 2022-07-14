import { matchParticipants } from "../main"; 

test('match the participants', () => {

    let firstParticipant = "Jack";
    let secondParticipant = "Jill";

    expect(matchParticipants(firstParticipant, secondParticipant)).toEqual("Jack matches Jill 60%");

    let thirdParticipant = "Kimberley";
    let fourthParticipant = "Jason";

    expect(matchParticipants(thirdParticipant, fourthParticipant)).toEqual("Kimberley matches Jason 30%");

    let fifthParticipant = "Otshepeng";
    let sixthParticipant = "Tommy";

    expect(matchParticipants(fifthParticipant, sixthParticipant)).toEqual("Otshepeng matches Tommy 93%, good match");

});