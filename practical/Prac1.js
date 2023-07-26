function main() {
    let name = "Dev Koyani"; 
    let age = 20;          
    let height = 5.7;     
    let isStudent = true;  

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Height:", height);
    console.log("Is Student:", isStudent);

    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let result = add(num1, num2);
    console.log("Sum of the two numbers:", result);
}
function add(num1, num2) {
    return num1 + num2;
}