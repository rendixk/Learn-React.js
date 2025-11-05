import React from 'react'
import { AuthLayout } from '../Layout/AuthLayout'
import { RegisterForm } from '../Fragment/RegisterForm'

export const RegisterPage = () => {
    return (
        <>
            <AuthLayout title="Register" subtitle="Welcome, please enter your details" type="register">
                <RegisterForm/>
            </AuthLayout>
        </>
    )
}