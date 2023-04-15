chrome.action.onClicked.addListener((tab) => {
    readWebPageContent();
});

// Define a function to read and parse webpage content
function readWebPageContent() {
    // Use the chrome.scripting.executeScript() method to execute a script on the current page
    chrome.scripting.executeScript({
        // Set the target to the current tab
        target: {tabId: tab.id},
        
        function: () => {
            // Use the document.body.innerText property to get the text content of the webpage
            const pageContent = document.body.innerText;
            // Parse the page content as desired
            const parsedContent = pageContent; //parsePageContent(pageContent);
            // Return the parsed content
            return parsedContent;
        }
    }, (results) => {
        // Log any errors or results returned by the script
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } else {
            console.log(results[0]);
        }
    });
}


// // Define a function to parse the page content as desired
// function parsePageContent(pageContent) {
//     // Implement your parsing logic here
//     return parsedContent;
// }