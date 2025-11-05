import { CardProduct } from "../Fragment/CardProduct"

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
        id: 2,
        name: "Sepatu Dungu",
        price: "Rp 2.000.000",
        image: "/images/shoes.jpg",
        description: "Certified Supri."
    },
]

export const ProductPage = () => {
    return (
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
    )
}