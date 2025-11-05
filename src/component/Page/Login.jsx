import React from 'react'
import { AuthLayout } from '../Layout/AuthLayout'
import { LoginForm } from '../Fragment/LoginForm'
export const LoginPage = () => {
    return (
        <AuthLayout title="Login" subtitle="Welcome Back, User!" type="login">
            <LoginForm/>
        </AuthLayout>
    )
}
