var allGuestsName = ["Hamza", "Ali", "Omar"];
allGuestsName.forEach(function (guest) {
    console.log("Would you like to have dinner " + guest);
});
console.log(allGuestsName[1] + " wont be able to make it");
allGuestsName[1] = "Ashar";
console.log("Would you like to have dinner " + allGuestsName[1]);
console.log("We have more space as we have a bigger table now");
allGuestsName.unshift("Ahsan");
allGuestsName.push("Khan");
// add an element in middle
allGuestsName.splice(2, 0, "Natiq");
console.log(allGuestsName);
allGuestsName.forEach(function (guest) {
    console.log("Would you like to have dinner " + guest);
});
