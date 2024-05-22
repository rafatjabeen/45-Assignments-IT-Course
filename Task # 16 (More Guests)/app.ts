// 16) More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let Guest_List : string[] = ["Aasia", "Rehana", "Gul"];

console.log("\n NEW LIST OF INVITATION \n" );

for(let j = 0; j < Guest_List.length; j++){

    console.log(`Dear ${Guest_List[j]} : \n you are invited to dinner \n`);
}

console.log("Good news! We have found a bigger dinner table, so more space is available. So our new guests are : \n ");

Guest_List.unshift("Shumaila");
//console.log(Guest_List);

Guest_List.splice(2, 0, "Nuzhat");
//console.log(Guest_List);

Guest_List.push("Nayyer");
//console.log(Guest_List);

for(let i = 0; i < Guest_List.length; i++){

    console.log(`Dear ${Guest_List[i]} : \n you are invited to dinner \n`);
}
