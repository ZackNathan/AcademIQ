// background script is the 'main' extension script that runs in the background

import { queryArxivAPI } from "./arxiv.js";

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        console.log(message.type);
        
        // messages received from innertext.js, contains cleaned page text
        if (message.type === "innertext") {
            
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
            }).then(
                response => response.text()
            ).then((keywords) => {
                console.log(keywords);

                // query the arxiv API using the keywords
                queryArxivAPI(
                    keywords, 5
                ).then((papers) => {
                    const json = JSON.stringify(papers);
                    console.log(json);
            
                    chrome.runtime.sendMessage({
                        type: "papers",
                        data: json
                    });
                })

            }).catch(error => console.error(error));

            sendResponse({
                response: "response"
            });

        }
    }
);
