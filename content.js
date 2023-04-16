// script embedded in the extension to inject 'innertext.js' into the web page

function readWebpageContent() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];

        // inject the script into the active tab
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            files: ["innertext.js"],
        });
    });
}

function displayPapers(papers) {
    
    // Check if response.papers is defined and an iterable object
    const papersArray = Array.isArray(papers) ? papers : [
        {title: "Metal Allows for people to be themselves", url: "https://www.google.com", authors: ["Daniel Ha", "Zach Nathan"], date: "2021-04-20"},
        {title: "Metal Allows for people to be themselves", url: "https://www.google.com", authors: ["Daniel Ha", "Zach Nathan"], date: "2021-04-20"},
        {title: "Metal Allows for people to be themselves", url: "https://www.google.com", authors: ["Daniel Ha", "Zach Nathan"], date: "2021-04-20"},
        {title: "Metal Allows for people to be themselves", url: "https://www.google.com", authors: ["Daniel Ha", "Zach Nathan"], date: "2021-04-20"},
    ];

    let papersHtml = "";
    for (const paper of papersArray) {
        papersHtml += `<a href="${paper.url}" target="_blank">`

        //go through the list of authors and add them to the string
        const authorsArray = Array.isArray(paper.authors) ? paper.authors : [paper.authors];
        i = 0;
        while (i < authorsArray.length - 1) {
            papersHtml += `${authorsArray[i]}, `;
            i++;
        }
        papersHtml += `${authorsArray[i]}. `;
        //add the title
        papersHtml += `<i>${paper.title}</i>. `;
        //add the date
        papersHtml += `${paper.date}. `;
        //add the url
        papersHtml += `</a>`;
        //add a line break
        papersHtml += `<br>`;
        papersHtml += `<br>`;
    }

    // Get a reference to the element in the popup where you want to display the papers
    const papersContainer = document.getElementById("papers-container");
    papersContainer.innerHTML = papersHtml;
}

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        console.log(message.type);
        // messages received from innertext.js, contains cleaned page text
        if (message.type === "papers") {

            const papers = JSON.parse(message.data);
            console.log(papers);
            displayPapers(papers);
        }

        sendResponse({
            response: "response"
        });
    }
);

readWebpageContent();