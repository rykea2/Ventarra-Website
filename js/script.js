
const TextPush = document.querySelector("#TextPush");
const TextPop = document.querySelector("#TextPop");
const TextUnshift = document.querySelector("#TextUnshift");
const TextShift = document.querySelector("#TextShift");

const TextList = [];

TextPush.addEventListener("click", function () {
    let inputBox = document.querySelector("#inputBox");
    TextList.push(inputBox.value);

    let TextDisplay = document.querySelector("#TextDisplay");
    TextDisplay.textContent = TextList;

    inputBox.value = "";
});

TextPop.addEventListener("click", function () {
    let inputBox = document.querySelector("#inputBox");
    TextList.pop(inputBox.value);

    let TextDisplay = document.querySelector("#TextDisplay");
    TextDisplay.textContent = TextList;

    inputBox.value = "";
});

TextUnshift.addEventListener("click", function () {
    let inputBox = document.querySelector("#inputBox");
    TextList.unshift(inputBox.value);

    let TextDisplay = document.querySelector("#TextDisplay");
    TextDisplay.textContent = TextList;

    inputBox.value = "";
});

TextShift.addEventListener("click", function () {
    let inputBox = document.querySelector("#inputBox");
    TextList.shift(inputBox.value);

    let TextDisplay = document.querySelector("#TextDisplay");
    TextDisplay.textContent = TextList;

    inputBox.value = "";
});