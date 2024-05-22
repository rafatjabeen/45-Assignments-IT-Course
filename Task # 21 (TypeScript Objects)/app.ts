// 21) They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


interface type {

    Name: string, Age: number, Profession: string
}

let obj: type = {Name: "Rafat", Age: 99, Profession: "Teacher"};

console.log(`My name is : ${obj.Name}`);
console.log(`I am  ${obj.Age} years old`);
console.log(`I am a ${obj.Profession}`);