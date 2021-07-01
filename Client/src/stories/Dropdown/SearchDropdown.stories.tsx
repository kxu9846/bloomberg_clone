import {Story} from '@storybook/react'
import React from 'react'
import Search from '../../components/Dropdown/Search/index'

export default {
    title: 'Search',
    component: Search
}

const Template : Story = (args:any) => <Search {...args} />

export const SearchDropdown = Template.bind({})
SearchDropdown.args = {
    variant: "primary",
}
