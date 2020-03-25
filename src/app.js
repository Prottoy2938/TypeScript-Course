function combine(num1, num2, resultConversion) {
    if ((typeof num1 === "number" && typeof num2 === "number") ||
        resultConversion === "as-number") {
        return +num1 + +num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
console.log(combine("1", "4", "as-number"));
console.log(combine(1, 4, "as-number"));
console.log(combine("Hello ", "World", "as-string"));
