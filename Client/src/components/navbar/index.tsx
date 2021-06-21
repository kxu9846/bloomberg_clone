import React from 'react'
import './Navbar.css'

interface props {
    variant: string
    children: string
}

function Navbar(props: props) {
    const { variant = "main", children, ...rest } = props

    return (
        <div className = {`navbar ${variant}`} {...rest}>
            <div>
                
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}


export default Navbar