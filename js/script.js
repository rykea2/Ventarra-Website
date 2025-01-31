const TextPush = document.querySelector("#TextPush");
const TextPop = document.querySelector("#TextPop");
const TextUnshift = document.querySelector("#TextUnshift");
const TextShift = document.querySelector("#TextShift");
const TextEmpty = document.querySelector("#TextEmpty");
let inputBox = document.querySelector("#inputBox");
let TextDisplay = document.querySelector("#TextDisplay");
const TextList = [];

TextPush.addEventListener("click", function () {
    TextList.push();
    TextDisplay.textContent = TextList;

});

TextPop.addEventListener("click", function () {
    TextList.pop();
    TextDisplay.textContent = TextList;

});

TextUnshift.addEventListener("click", function () {
    TextList.unshift();
    TextDisplay.textContent = TextList;

});

TextShift.addEventListener("click", function () {
    TextList.shift();
    TextDisplay.textContent = TextList;

});

TextEmpty.addEventListener("click", function () {
    alert("Text Emptied");
    TextList = [];
});