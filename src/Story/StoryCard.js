import React from 'react'
import "./StoryCard.css";
import axios from 'axios'



export default function StoryCard({ title, author, story, moral }) {

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


            <button onClick={handleClick}>Click Here </button>
        </div>
    )
}
