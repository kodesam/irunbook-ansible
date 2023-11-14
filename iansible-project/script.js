// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

async function generateResponse() {
    const inputText = document.getElementById('inputText').value;

    // Make a POST request to OpenAI API
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: inputText,
            max_tokens: 100
            // You can customize other parameters as needed
        })
    });

    // Parse the JSON response
    const responseData = await response.json();

    // Display the generated text in the outputText div
    document.getElementById('outputText').innerText = responseData.choices[0].text;
}
