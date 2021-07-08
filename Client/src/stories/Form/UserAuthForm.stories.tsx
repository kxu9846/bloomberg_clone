import { Story} from '@storybook/react'
import React from 'react'
import UserAuthForm from '../../components/Form/UserAuthForm'

export default {
    title: "userAuthForm",
    component: UserAuthForm
}

const Template : Story = (args:any) => <UserAuthForm {...args} />

export const SignInForm = Template.bind({})
SignInForm.args = {
    variant: 'signin',
    text: 'Sign In'
}

export const SignUpForm = Template.bind({})
SignUpForm.args = {
    variant: 'signup',
    text: 'Sign Up'
}