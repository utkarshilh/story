const XI_API_KEY = 'sk_38bc00becdc850b1036c4bff055e1beeb9d8ecb0c9cada24'
const url = "https://api.elevenlabs.io/v1/voices";


console.log(XI_API_KEY)
const headers = {
    "Accept": "application/json",
    "xi-api-key": XI_API_KEY,
    "Content-Type": "application/json"
};

fetch(url, { method: "GET", headers })
    .then(response => response.json())
    .then(data => {
        data.voices.forEach(voice => {
            console.log(`Name: ${voice.name}, ID: ${voice.voice_id}`);
        });
    })
    .catch(error => console.error("Error fetching voices:", error));
