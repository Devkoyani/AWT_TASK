function factRecr(num) {
    function Fact(n) {
      if (n === 0) {
        return 1;
      } else {
        return n * Fact(n - 1);
      }
    }
  
    return Fact(num);
  }
  
  let globalVar = "global variable.";
function main4() {
    let localVar = "local variable.";
    console.log("Accessing global:", globalVar);
    console.log("Accessing locals:", localVar);

    let num = 5;
    let result = factRecr(num);
    console.log(`Factorial of ${num} is `, result);
}