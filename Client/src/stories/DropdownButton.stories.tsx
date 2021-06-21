import {Story} from '@storybook/react'
import React from 'react'
import DropdownButton from '../components/DropdownButton/index'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default {
    title: 'DropdownButton',
    component: DropdownButton
}

const Template : Story = (args:any) => <DropdownButton {...args} />

export const MenuButton = Template.bind({})
MenuButton.args = {
    variant: 'menu',
    text: 'Menu',
    icon: faBars
}

export const SearchButton = Template.bind({})
SearchButton.args = {
    variant: 'search',
    text: 'Search',
    icon: faSearch
}