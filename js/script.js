const TextPush = document.querySelector("#TextPush");
const TextPop = document.querySelector("#TextPop");
const TextUnshift = document.querySelector("#TextUnshift");
const TextShift = document.querySelector("#TextShift");
const TextEmpty = document.querySelector("#TextEmpty");
let inputBox = document.querySelector("#inputBox");
let TextDisplay = document.querySelector("#TextDisplay");
let TextList = ["Deez Nutz", "Updog", "Ligma"];

TextPush.addEventListener("click", function () {
    TextList.push(inputBox.value);
    TextDisplay.textContent = TextList;

});

TextPop.addEventListener("click", function () {
    TextList.pop();
    TextDisplay.textContent = TextList;

});

TextUnshift.addEventListener("click", function () {
    TextList.unshift(inputBox.value);
    TextDisplay.textContent = TextList;

});

TextShift.addEventListener("click", function () {
    TextList.shift();
    TextDisplay.textContent = TextList;

});

TextEmpty.addEventListener("click", function () {
    TextList = [];
    TextDisplay.textContent = TextList;
    alert("Text Emptied");
    
});