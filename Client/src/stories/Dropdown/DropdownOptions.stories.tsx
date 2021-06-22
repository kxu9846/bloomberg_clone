import {Story} from '@storybook/react'
import React from 'react'
import Options from '../../components/Dropdown/Menu/Options/index'

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

export const MarketsOption = Template.bind({})
MarketsOption.args = {
    variant: "Markets",
    dropDownOption: "Markets"
}

export const TechnologyOption = Template.bind({})
TechnologyOption.args = {
    variant: "Technology",
    dropDownOption: "Technology"
}