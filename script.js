//Test to make sure .js sourced correctly
console.log ('Hello, Instructor!');

//PROBLEM #1: Addition
function additionFunction(num1, num2) {
    return num1 + num2
}

console.log('The sum of 22 and 55 is:', additionFunction(22, 55));
console.log('The sum of 187 and 13 is:', additionFunction(187, 13));

//PROBLEM #2: Conditional
function conditionalFunction(num1, num2) {
    if (num1 > num2) {
        return ('"The first number was bigger!"');
    }
    else if (num1 < num2) {
        return ('"The second number was bigger!"');
    }
    else if (num1 === num2) {
        return ('"The numbers are the same!"');
    }
}
console.log('Here is a comparison of 22 and 55:', conditionalFunction(22, 55));
console.log('Here is a comparison of 187 and 13:', conditionalFunction(187, 13));
console.log('Here is a comparison of 22 and 22:', conditionalFunction(22, 22));

//PROBLEM #3: Array
let myArray = [];

function arrayFunction(myArray) {
    return myArray[0] + myArray[myArray.length - 1];
}

console.log ('The first and last numbers of the array add up to (expect 9):', arrayFunction([1, 2, 3, 4, 5, 7, 8]));
console.log ('The first and last numbers of the array add up to (expect 6):', arrayFunction([1, 2, 3, 4, 5]));
console.log ('The first and last numbers of the array add up to (expect 112):', arrayFunction([12, 2, 3, 4, 5, 7, 100]));