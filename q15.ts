// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let guestsName = ["Hamza", "Ali", "Omar"];
console.log("Would you like to have lunch " + guestsName[0]);
console.log("Would you like to have dinner " + guestsName[1]);
console.log("Would you like to have breakfast " + guestsName[2]);

console.log(guestsName[1] + " wont be able to make it");

guestsName[1] = "Ashar";

console.log("Would you like to have dinner " + guestsName[1]);