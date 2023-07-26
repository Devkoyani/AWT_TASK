let numbersArray = [1, 2, true, "Dev", 5.0];
let arrayLength = numbersArray.length;
console.log("Length of the array:", arrayLength);
console.log("Element at 0:", numbersArray[0]);
console.log("Element at 2:", numbersArray[2]);
numbersArray.push(6);       
numbersArray.pop();         
numbersArray.shift();       
numbersArray.unshift(0);    
let slicedArray = numbersArray.slice(1, 4); 
console.log("Sliced arr:", slicedArray);
let person = {
    name: "Dev Koyani",
    age: 20,
    gender: "Male"
};
let joinedArray = numbersArray.join(", "); 
console.log("Modified arr:", joinedArray);

delete numbersArray[1]; 

let newArray = [7, 8, 9];
let concatenatedArray = numbersArray.concat(newArray); 
console.log("Concatenated arr:", concatenatedArray);
let flattenedArray = [[1, 2], [3, 4], [5, 6]].flat();
console.log("Flattened arr:", flattenedArray);
numbersArray.splice(1, 1, 10, 11); 
console.log("arr after splice:", numbersArray);

function displayPersonDetails(person) {
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("Gender:", person.gender);
}