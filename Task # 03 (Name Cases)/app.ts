//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


const personName = "rafat JAbeen";

// for upperCase :

console.log(`Name in upperCase : ${personName.toUpperCase()}`);

// for lowerCase :

console.log(`Name in lowerCase : ${personName.toLowerCase()}`);

// for Title case :

let titleCaseName =  personName.replace(/\b\w/g, c=> c.toUpperCase());

console.log(`Name in titleCase : ${titleCaseName}` );