import React from 'react'
import "./StoryCard.css";
import axios from 'axios'
import { useState } from 'react'




export default function StoryCard({ title, author, story, moral }) {
    const [audioUrl, setAudioUrl] = useState('hj')


    const handleClick = async () => {
        const storyData = { title, author, story, moral }

        try {
            console.log("function is executing from frontend side ")
            const response = await axios.post('http://localhost:9000/hello', storyData)

            if (!response) {
                alert('Response not found')
            }
        } catch (error) {
            alert(error)
            console.log("this is not fair")
        }
    }
    return (
        <div className="story-card">
            <h2 className="story-title">{title}</h2>
            <p className="author">By: {author}</p>
            <p className="story-content">{story}</p>
            <p className="moral">Moral: {moral}</p>
            {/* {audioUrl == '' ? <button onClick={handleClick}>Click Here </button> :
                <audio controls src='/audio_1740939042751.mp3'>
                    <source src={audio} type="audio/mpeg" />
                </audio>
            } */}


            <audio controls>
                <source src="/temp.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <button onClick={handleClick}>Click Here </button>
        </div>
    )
}
