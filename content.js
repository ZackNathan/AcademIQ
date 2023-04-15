function readWebpageContent() {
    // Read and parse the webpage content here.
    const content = document.body.innerText;

    //console.log(content);

    chrome.runtime.sendMessage(
        {
            content: content
        },
        function(response) {
            console.log(response);
            return true;
        }
    );
}

readWebpageContent();