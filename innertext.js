// injected script to send document text to the background

// remove extra whitespace and punctuation
const text = document.body.innerText;
const spaces = text.replace(/\s+/g, " ");
const cleaned = text.replace(/[^a-zA-Z ]+/g, " ");

// send to the background script
chrome.runtime.sendMessage({
    type: "innertext",
    text: cleaned
});