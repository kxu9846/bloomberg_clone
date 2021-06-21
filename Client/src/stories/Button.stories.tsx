import { Story} from '@storybook/react'
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

export const Border = () =>
    <Button variant = "border">
        Border
    </Button>

export const Link = () =>
    <Button variant = "link">
        Link
    </Button>

const Template : Story = (args:any) => <Button {...args} />

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

export const BorderButton = Template.bind({})
BorderButton.args = {
    variant: 'border',
    children: 'Subscribe'
}

export const LinkButton = Template.bind({})
LinkButton.args = {
    variant: 'link',
    children: 'Sign In'
}