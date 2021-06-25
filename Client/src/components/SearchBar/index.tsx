import React, {useState, useEffect, useCallback} from 'react'
import './SearchBar.css'

function SearchBar() {
    const [inputValue, setInputValue] = useState("What are you searching for?")

    const changeHandler = (e: any) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }

    return (
        <div className="search-bar">
            <form action="/" method="get">
                <input
                    type="text"
                    placeholder = {inputValue}
                    onChange={changeHandler}
                />
            </form>
        </div>
    )
}

export default SearchBar