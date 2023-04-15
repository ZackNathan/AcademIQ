// script to handle arxiv API requests and parsing

function extractBetweenTags(xml, tagName) {
    // sorry, I know I'm not supposed to parse like this...
    const oneline = xml.replace(/(\r\n|\n|\r)/gm, "");
    const re = new RegExp(`<${tagName}>(.*?)<\/${tagName}>`, "g");
    const array = [...oneline.matchAll(re)];

    // extract capturing group from the match object
    const results = array.map(function(match) {
      return match[1];
    });

    // return array of matches, or single match
    if (results.length == 1) {
      return results[0];
    } else {
      return results;
    }
}

function parseXmlData(data) {
    const entries = extractBetweenTags(data, "entry");
    const results = entries.map(function(entry) {
        return {
            url: extractBetweenTags(entry, "id"),
            date: extractBetweenTags(entry, "published"),
            authors: extractBetweenTags(entry, "name"),
            title: extractBetweenTags(entry, "title"),
            summary: extractBetweenTags(entry, "summary")
        }
    });
    return results;
}

export async function queryArxivAPI(keyword, maxResults = 3) {
    const formattedKeyword = keyword.split(" ").join("+");
    const apiUrl = `http://export.arxiv.org/api/query?search_query=all:${formattedKeyword}&start=0&max_results=${maxResults}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.text();
        const results = parseXmlData(data);
        return results;

    } catch (error) {
        console.error("Error fetching data from arXiv API:", error);
        return [];
    }
}