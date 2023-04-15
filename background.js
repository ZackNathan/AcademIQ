import { queryArxivAPI } from "./arxiv.js"

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
