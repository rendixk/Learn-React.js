import { CardProduct } from "../Fragment/CardProduct"

export const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/images/shoes.jpg"  />
                <CardProduct.Body title="Sepatu Baru">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, ullam distinctio! Voluptate rem consectetur ducimus accusantium, natus expedita. Consequuntur animi amet optio reprehenderit fugiat! Assumenda minima esse eos animi odit?</CardProduct.Body>
                <CardProduct.Footer price="Rp1.000.000"/>
            </CardProduct>
        </div>
    )
}