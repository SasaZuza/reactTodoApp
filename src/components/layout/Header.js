import React from 'react'
// Allows us to use 'Link' option to link to some pages from home page (other components)
import { Link } from 'react-router-dom'

// This is example of functional component
export default function Header() {
    return (
        <header style={headerStyle}>

            <h1>TodoList</h1>

            {/* Adding two link to the header component */}
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>

        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}