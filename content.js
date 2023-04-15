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

readWebpageContent();