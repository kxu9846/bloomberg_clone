import React from 'react'
import Button from '../components/button/Index'

export default {
    title: 'Button',
    component: Button,
}

export const Primary = () => 
    <Button variant = "primary" >
        Primary
    </Button>

export const Secondary = () =>
    <Button variant = "secondary">
        Secondary
    </Button>

const Template = (args: any) => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long Primary Ags'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    children: 'Secondary Args'
}