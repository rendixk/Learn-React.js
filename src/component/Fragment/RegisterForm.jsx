import React from 'react'
import InputForm from '../Element/Input/InputForm'
import Button from '../Element/Button/Button'

export const RegisterForm = () => {
    return (
        <form action="">
            <InputForm
                label="Fullname" 
                type="text" 
                placeholder="John Doe" 
                name="fullname"
            />
            <InputForm
                label="Email" 
                type="email" 
                placeholder="example@gmail.com" 
                name="email"
            />
            <InputForm 
                label="Password" 
                type="password" 
                placeholder="********" 
                name="password"
            />
            <InputForm 
                label="Confirm Password" 
                type="password" 
                placeholder="********" 
                name="confirm password"
            />
        <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}
