// Question 3
var titleCase = function (str) {
    var words = str.split(" ");
    var title = words.map(function (word) { return word[0].toUpperCase() + word.slice(1); });
    return title.join(" ");
};
var myName = "Muhammad Umar";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(titleCase(myName));
