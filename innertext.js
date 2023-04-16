// injected script to send document text to the background

// remove extra whitespace and punctuation
var text = document.body.innerText.substring(0, 10000);
var spaces = text.replace(/\s+/g, " ");
var cleaned = spaces.replace(/[^a-zA-Z ]+/g, " ");

console.log("sending message to background");

// send to the background script
chrome.runtime.sendMessage({
    type: "innertext",
    text: cleaned
});