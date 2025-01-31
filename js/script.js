const TextPush = document.querySelector("#TextPush");
const TextPop = document.querySelector("#TextPop");
const TextUnshift = document.querySelector("#TextUnshift");
const TextShift = document.querySelector("#TextShift");
const TextEmpty = document.querySelector("#TextEmpty");
let inputBox = document.querySelector("#inputBox");
let TextDisplay = document.querySelector("#TextDisplay");
const TextList = [];

TextPush.addEventListener("click", function () {
    TextList.push(inputBox.value);
    TextDisplay.textContent = TextList;

    inputBox.value = "";
});

TextPop.addEventListener("click", function () {
    TextList.pop(inputBox.value);
    TextDisplay.textContent = TextList;

    inputBox.value = "";
});

TextUnshift.addEventListener("click", function () {
    TextList.unshift(inputBox.value);
    TextDisplay.textContent = TextList;

    inputBox.value = "";
});

TextShift.addEventListener("click", function () {
    TextList.shift(inputBox.value);
    TextDisplay.textContent = TextList;

    inputBox.value = "";
});

TextEmpty.addEventListener("click", function () {
    alert("Text Emptied");
    TextList = [];
});