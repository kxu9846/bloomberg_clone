import React from 'react'
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface props {
    variant: string
    children?: string
    icon?: any
}

function Button(props: props) {
    const { variant = "primary", children, icon, ...rest } = props

    return (
        <button className = {`button ${variant}`} {...rest}>
            {children}
            <FontAwesomeIcon icon = {icon} />
        </button>
    )
}

export default Button