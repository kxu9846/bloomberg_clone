import React from 'react'
import './Homepage.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import DropdownButton from '../../components/DropdownButton/index'
import Title from '../../components/Title/index'
import Button from '../../components/Button/index'
import QuickLinksBar from '../../components/quicklinksbar/QuickLinksBar'

function Homepage() {
    return (
        <div className = "homepage-container">
            <div className = "main-navbar-header">
                <div className = "main-navbar-header-left">
                    <DropdownButton variant = "menu" text = "Menu" icon = {faBars}/>
                    <DropdownButton variant = "search" text = "Search" icon = {faSearch}/>
                </div>
                <Title variant = "mainnavbartitle" text = "Bloomberg"/>
                <div className = "main-navbar-header-right">
                    <Button variant = "sign-in-link" children = "Sign In"/>
                    <Button variant = "border" children = "Subscribe"/>
                </div>
            </div>
            <div className = "main-content-container">
                <QuickLinksBar />
            </div>
        </div>
    )
}

export default Homepage