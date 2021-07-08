import React from 'react'
import { Story, Meta} from '@storybook/react'
import UserAuthModal from '../../components/Modal/UserAuthModal/index'

export default {
    title: "Modal",
    component: UserAuthModal
}

const Template : Story = (args:any) => <UserAuthModal {...args} />

export const SignIn = Template.bind({})
SignIn.args = {
    variant: 'signin',
    text: 'Sign In'
}