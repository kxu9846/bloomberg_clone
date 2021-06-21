import React from 'react'
import './DropdownButton.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

interface props {
    variant: string,
    text: string,
    icon: any
}

export default function DropdownButton({variant, text, icon} : props) {
    return (
        <div className = {`dropdownbutton ${variant}`}>
            <div>
                <FontAwesomeIcon icon = {icon} />
            </div>
            <span>{text}</span>
        </div>
    )
}