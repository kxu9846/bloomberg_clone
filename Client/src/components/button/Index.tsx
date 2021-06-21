import React from 'react'
import './Button.css'

interface props {
    variant: string
    children: string
    rest: JSX.IntrinsicElements
}

function Button(props: props) {
    const { variant = "primary", children, ...rest } = props

    return (
        <button className = {`button ${variant}`} {...rest}>
            {children}
            {rest}
        </button>
    )
}

export default Button