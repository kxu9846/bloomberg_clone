import {Story} from '@storybook/react'
import React from 'react'
import Options from '../components/Dropdown/Menu/Options/index'

export default {
    title: 'DropdownOption',
    component: Options
}

const Template : Story = (args:any) => <Options {...args} />

export const HomeOption = Template.bind({})
HomeOption.args = {
    variant: "Home",
    dropDownOption: "Home"
}