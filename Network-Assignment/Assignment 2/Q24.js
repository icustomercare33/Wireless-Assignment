function parseJSON(jsonString) {
    try {
        let result = JSON.parse(jsonString);
        console.log("Parsed successfully:", result);
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error("Caught a SyntaxError: Invalid JSON format.");
        } else {
            console.error("An unexpected error occurred:", error);
        }
    }
}

parseJSON('{"name": "John"}');
parseJSON('{invalid json}');
