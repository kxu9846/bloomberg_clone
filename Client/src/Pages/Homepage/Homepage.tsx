import React, {useState}from 'react'
import './Homepage.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import DropdownButton from '../../components/DropdownButton/index'
import Title from '../../components/Title/index'
import Button from '../../components/Button/index'
import QuickLinksBar from '../../components/quicklinksbar/QuickLinksBar'
import Search from '../../components/Dropdown/Search/index'

function Homepage() {
    const [currentState, setCurrentState] = useState({
        searchButtonClicked: false
    })

    const handleSearchButtonClicked = () => {
        setCurrentState({
            searchButtonClicked: !currentState.searchButtonClicked
        })
    }

    return (
        <div className="homepage-container">
            <div className="main-navbar-header">
                <div className="main-navbar-header-left">
                    <div>
                        <DropdownButton variant="menu" text="Menu" icon={faBars} />
                    </div>
                    <div onClick= {handleSearchButtonClicked}>
                        <DropdownButton variant="search" text="Search" icon={faSearch}/>
                    </div>
                </div>
                <Title variant = "mainnavbartitle" text = "Bloomberg"/>
                <div className = "main-navbar-header-right">
                    <Button variant = "sign-in-link" children = "Sign In"/>
                    <Button variant = "border" children = "Subscribe"/>
                </div>
            </div>
            {currentState.searchButtonClicked ?
                <div>
                    <Search variant="primary" />
                </div> : null}
            <div className = "main-content-container">
                <QuickLinksBar />
            </div>
        </div>
    )
}

export default Homepage