import React from 'react'

// This is example of functional component
export default function About() {
    return (
        // If we don't want to use div in component we use this tag to be like 'ghost' element
        <React.Fragment>
            <h1> About </h1>
            <p> This is React ToDo App that is created as a part of Traversy media React chrash course for 2019. </p>
        </React.Fragment>
    )
}
