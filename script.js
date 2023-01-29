//your code here
const textbox = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");
textbox.addEventListener("input", () => {
	letterCount.innerText = textbox.value.length;
});