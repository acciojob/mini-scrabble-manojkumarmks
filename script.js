//your code here
const textbox = document.getElementById('evaluatedText');
const countEl = document.getElementById('letterCount');

textbox.addEventListener('input', () => {
  countEl.innerText = textbox.value.length;
});
