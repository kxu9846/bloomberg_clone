import React from 'react'
import './Title.css'

interface props {
    variant: string,
    text: string,
}

export default function Title({variant, text} : props) {
    return (
        <span className = {`title ${variant}`}>
            {text}
        </span>
    )
}