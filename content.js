function readAndParseWebpageContent() {
    // Read and parse the webpage content here.
    // For example, you can extract all headings from the webpage:
    const content = document.body.innerText;

    console.log(content);

    // Send the parsed data to the background script or another part of the extension as needed.
    chrome.runtime.sendMessage({ content: content });
}

readAndParseWebpageContent();