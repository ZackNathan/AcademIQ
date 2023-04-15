// injected script to send document text to the background

const text = document.body.innerText;
const spaces = text.replace(/\s+/g, " ");
const cleaned = text.replace(/[^a-zA-Z ]+/g, " ");

chrome.runtime.sendMessage({
    type: "innertext",
    text: cleaned
});