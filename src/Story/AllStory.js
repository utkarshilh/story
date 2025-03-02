import React, { useEffect } from 'react'
import StoryCard from './StoryCard'
import { useState } from 'react';
// import axios from 'axios'

export default function AllStory() {

    const [allStory, setAllStory] = useState([]);

    useEffect(() => {
        async function fetchStory() {
            try {
                const response = await fetch("https://shortstories-api.onrender.com/stories")
                if (!response.ok) {
                    throw new Error("Failed to fetch stories");
                }
                const data = await response.json();
                setAllStory(data);
            } catch (error) {

                console.log(error)
                alert("unable to fetch")

            }
        }
        fetchStory();
    }, [])




    return (
        <>
            {allStory.map((story, index) => (
                <StoryCard
                    key={index}  // Using index as key (better to use a unique ID if available)
                    title={story.title}
                    author={story.author}
                    story={story.story}
                    moral={story.moral}
                />


            ))}
        </>
    )

}


