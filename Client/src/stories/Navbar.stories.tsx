import React from 'react'
import {Primary} from './Button.stories'
import {Secondary} from './Button.stories'

export default {
    title: "navbar"
}

export const PrimaryNavbar = () => (
    <div>
        <Primary />
        <Secondary/>
    </div>
)