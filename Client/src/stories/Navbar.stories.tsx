import React from 'react'
import { Story, Meta} from '@storybook/react'
import Navbar from '../components/navbar/index'

export default {
    title: "navbar",
    component: Navbar
}

const Template : Story = (args:any) => <Navbar {...args} />

export const PrimaryNavbar = () => (
    <div>
    </div>
)