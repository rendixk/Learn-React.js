import { Fragment } from "react"
import { CardProduct } from "../Fragment/CardProduct"
import Button from "../Element/Button/Button"
import { useNavigate } from "react-router-dom"

const products = [
    {
        id: 1,
        name: "Sepatu Lama",
        price: "Rp 1.000.000",
        image: "/images/shoes.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, ullam distinctio! Voluptate rem consectetur ducimus accusantium, natus expedita. Consequuntur animi amet optio reprehenderit fugiat! Assumenda minima esse eos animi odit?"
    },
    {
        id: 2,
        name: "Sepatu Baru",
        price: "Rp 950.000",
        image: "/images/shoes.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, ullam distinctio! Voluptate rem consectetur ducimus accusantium, natus expedita."
    },
    {
        id: 3,
        name: "Sepatu Dungu",
        price: "Rp 2.000.000",
        image: "/images/shoes.jpg",
        description: "Certified Supri."
    },
]

const email = localStorage.getItem("email")

export const ProductPage = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        navigate("/login")
    }
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
            {products.map((product) => (
            <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.name}>
                    {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price}/>
            </CardProduct>
            ))}
        </div>
        </Fragment>
    )
}