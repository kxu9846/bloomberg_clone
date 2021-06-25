import React from 'react'
import './Search.css'
// import SearchBar from '../../SearchBar/index'

interface props {
    variant: string
}

function Search(props: props) {
    const { variant = "primary", ...rest } = props

    return (
        <div className={`search ${variant}`} {...rest}>
            <div className = 'category'>Companies and Quotes</div>
        </div>
    )
}

export default Search