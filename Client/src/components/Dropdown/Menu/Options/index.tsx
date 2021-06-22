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
            {options[dropDownOption].map((category: any) => {
                const categoryName = category[1]
                return (
                    <div key = {categoryName}>
                        <span>{categoryName}</span>
                        <ul>
                            {category[0].map((categoryOption: string) => (
                                <li>
                                    {categoryOption}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}