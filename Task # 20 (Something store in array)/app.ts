// 20) Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const locations: string[] = ["Mount Everest", "K2", "River Indus", "Paris", "Kashmir", "Canada", "Switzerland", "Norway"];

console.log(" \n List of Locations :");

for(let i = 0; i < locations.length; i++){

    console.log(locations[i]);
}