import React from 'react'
import './Search.css'
import SearchBar from '../../SearchBar/index'
import Button from '../../Button/index'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface props {
    variant: string
}

function Search(props: props) {
    const { variant = "primary", ...rest } = props

    return (
        <div className={`search ${variant}`} {...rest}>
            <div className="search-container">
                <div className="search-bar">
                    <SearchBar />
                </div>
                <div className= "close-button">
                    <Button variant="close" icon={faTimes}/>
                </div>
            </div>
            <div className = 'category'>Companies and Quotes</div>
        </div>
    )
}

export default Search