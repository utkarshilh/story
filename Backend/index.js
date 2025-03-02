const express = require('express')
const cors = require('cors')
const axios = require('axios');
const { response } = require('express');



app = express();

app.use(cors())
app.use(express.json())


require('dotenv').config();
const fs = require('fs');
const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = "21m00Tcm4TlvDq8ikWAM"





app.post('/hello', async (req, res) => {
    try {
        const text = req.body.story;

        console.log(text)
        if (!text) return res.sendStatus(400).json({ error: "Text is not found" });

        const response = await axios.post(
            `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
            {
                text: text,
                model_id: "eleven_monolingual_v1",
                voice_settings: { stability: 0.5, similarity_boost: 0.5 }
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "xi-api-key": API_KEY
                },
                responseType: "arraybuffer" // Ensures we receive binary audio data
            }

        );


        console.log("this happened")
        const filePath = `audio_${Date.now()}.mp3`;

        fs.writeFileSync(filePath, response.data); // Save audio file locally

        res.json({ message: "Audio generated successfully", file: filePath });

        console.log(filePath)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate audio" });
    }


});



app.listen(9000, () => {
    console.log("listening at port 9000")

})


