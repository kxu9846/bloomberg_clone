import React, {useState} from 'react'
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface props {
    variant: string
    children?: string
    icon?: any
}

function Button(props: props) {
    const { variant = "primary", children, icon, ...rest } = props

    const [currentState, setCurrentState] = useState({
        buttonClicked: false
    })

    const handleButtonClicked = () => {
        setCurrentState({
            buttonClicked: !currentState.buttonClicked
        }
        )
    }

    return (
        <div className="button-container" onClick={handleButtonClicked}>
            <button className = {`button ${variant}`} {...rest}>
                {children}
                <FontAwesomeIcon icon = {icon} />
            </button>
        </div>
    )
}

export default Button