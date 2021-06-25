import React, { useState } from 'react'
import './Search.css'
import SearchBar from '../../SearchBar/index'
import Button from '../../Button/index'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface props {
    variant: string
}

function Search(props: props) {
    const { variant = "primary", ...rest } = props

    const [currentState, setCurrentState] = useState({
        closeButtonClicked: false
    })

    const handleCloseButtonClicked = () => {
        setCurrentState({
            closeButtonClicked: !currentState.closeButtonClicked
        })
    }

    return (
        <div>
            {!currentState.closeButtonClicked ?
                <div className={`search ${variant}`} {...rest}>
                    <div className="search-container">
                        <div className="search-bar">
                            <SearchBar />
                        </div>
                        <div className="close-button" onClick={handleCloseButtonClicked}>
                            <Button variant="close" icon={faTimes} />
                        </div>
                    </div>
                    <div className='category'>Companies and Quotes</div>
                </div> : null
            }
        </div> 
    )
}

export default Search