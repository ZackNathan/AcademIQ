// background script is the 'main' extension script that runs in the background

import { queryArxivAPI } from "./arxiv.js"

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        
        // messages received from innertext.js, contains cleaned page text
        if (message.type === "innertext") {
            console.log(message.text);
        }
        
        //Reformating text to work with the API
        const data = {data: {
            text: message.text
        }};

        fetch("http://zsg350.pythonanywhere.com/api/process", {
            method: 'POST',
            headers: {
                'Content_Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((listOfKeywords) => {
            console.log(listofKeyWords);
        }) .catch(error => console.error(error));

    

        

        // query the arxiv API using the keywords
        const papers = queryArxivAPI("Deep learning", 5);
        console.log(papers);

        sendResponse({
            response: "response"
        });
    }
);
