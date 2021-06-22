import {Story} from '@storybook/react'
import React from 'react'
import Title from '../components/Title/index'

export default {
    title: 'Title',
    component: Title
}

const Template : Story = (args: any) => <Title {...args} />

export const MainNavbarTitle = Template.bind({})
MainNavbarTitle.args = {
    variant: "mainnavbartitle",
    text: "Bloomberg"
}

