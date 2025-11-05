import React from 'react'
import InputForm from '../Element/Input/InputForm'
import Button from '../Element/Button/Button'

export const LoginForm = () => {
    return (
        <form action="">
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
                name="email"
            />
        <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    )
}
