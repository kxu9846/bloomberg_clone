import React from 'react'
import './Options.css'
import {options} from '../util'

interface props {
    variant: string,
    dropDownOption: string,
}

export default function DropdownOption({variant, dropDownOption} : props) {
    

    return (
        <div className = {`dropdownoption ${variant}`}>
            <ul>
                <span>Read</span>
            </ul>
            <ul>
                <span></span>
            </ul>
            <ul>
                <span>Follow</span>
            </ul>
        </div>
    )
}