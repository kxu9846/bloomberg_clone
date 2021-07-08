import './UserAuthModal.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserAuthForm from '../../Form/UserAuthForm/index'
import {useState} from 'react'
import {userAuthModalIsOpened} from '../../../cache'

interface props {
    variant:string,
    text:string,
    userAuthModalStateSet: any,
}

function UserAuthModal({variant, text, userAuthModalStateSet}: props) {
    return (
        <div className = {`modal-background-div ${variant}`}>
            <div className = {`modal-form-div ${variant}`}>
                <button className = "modal-form-fatimes" onClick = {() => userAuthModalStateSet(userAuthModalIsOpened(false))} ><FontAwesomeIcon icon = {faTimes} /></button>
                <div className = 'modal-form-inner-div'>
                    <span className = "modal-form-text">{text}</span>
                    <UserAuthForm variant = {`${variant}`} text = {`${text}`}/>
                </div>
            </div>
        </div>
    )
}


export default UserAuthModal
