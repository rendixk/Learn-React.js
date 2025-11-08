import React from 'react'
import InputForm from '../Element/Input/InputForm'
import Button from '../Element/Button/Button'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault()
        localStorage.setItem("email", event.target.email.value)
        localStorage.setItem("password", event.target.password.value)
        console.log(event.target.email.value)
        console.log(event.target.password.value)
        console.log("Login Success")

        navigate("/product")
    }

    return (
        <form onSubmit={handleLogin}>
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
        <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    )
}
