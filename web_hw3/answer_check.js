console.log("Q2: String to Integer conversion: " + stringToInt("1234"));
console.log("Q2: String to Integer conversion: " + stringToInt("123.456"));
console.log("Q2: String to Integer conversion: " + stringToInt("invalid one"));
console.log("Q2: String to Integer conversion: " + stringToInt("-5678"));

console.log("Q3: masking 01012345678: " + maskNumber("01012345678"));

var input = [1, 5, 10, 4, -4, 11];
console.log("Q4: average of input [" + input + "] is " + getAverage(input));

console.log("Q5: 5 is multiple of 7: " + isMultipleSeven(5));
console.log("Q5: 21 is multiple of 7: " + isMultipleSeven(21));
console.log("Q5: 100 is multiple of 7: " + isMultipleSeven(100));

console.log("Q6: a=24 and b=8. Add is: " + operation("add", 24, 8));
console.log("Q6: a=24 and b=8. Subtract is: " + operation("substract", 24, 8));
console.log("Q6: a=24 and b=8. Multiply is: " + operation("multiply", 24, 8));
console.log("Q6: a=24 and b=8. Divide is: " + operation("divide", 24, 8));
console.log("Q6: a=24 and b=8. a power b is: " + operation("power", 24, 8));

console.log("Q7: triangle mountain with 10 floor");
triangleMtn(10);
