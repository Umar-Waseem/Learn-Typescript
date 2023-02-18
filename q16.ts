// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let allGuestsName = ["Hamza", "Ali", "Omar"];
allGuestsName.forEach((guest) => {
    console.log("Would you like to have dinner " + guest);
})

console.log(allGuestsName[1] + " wont be able to make it");

allGuestsName[1] = "Ashar";

console.log("Would you like to have dinner " + allGuestsName[1]);

console.log("We have more space as we have a bigger table now");

allGuestsName.unshift("Ahsan");
allGuestsName.push("Khan");
// add an element in middle
allGuestsName.splice(2, 0, "Natiq");
console.log(allGuestsName);


allGuestsName.forEach((guest) => {
    console.log("Would you like to have dinner " + guest);
})