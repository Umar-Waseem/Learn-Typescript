// Question 3
let titleCase = (str: string) => {  
    let words = str.split(" ")
    let title = words.map(word => word[0].toUpperCase() + word.slice(1))
    return title.join(" ")
}

var myName = "Muhammad Umar";
console.log(myName.toLowerCase())
console.log(myName.toUpperCase())
console.log(titleCase(myName))