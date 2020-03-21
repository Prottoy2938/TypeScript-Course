var button1 = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function addNum(num1, num2) {
    return num1 + num2;
}
button1.addEventListener("click", function () {
    console.log(addNum(+input1.value, +input2.value));
});
