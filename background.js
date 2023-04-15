import { queryArxivAPI } from "./arxiv.js"

chrome.action.onClicked.addListener(async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        console.log(message.content);

        const papers = queryArxivAPI("Deep learning", 5);
        console.log(papers);

        sendResponse({
            response: "response"
        });
    }
);
