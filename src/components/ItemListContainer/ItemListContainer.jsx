import { useState, useEffect, } from "react"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({ titulo }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("/data/products.json")
        .then((res) => {
            if(!res.ok) {
                throw new Error("Hubo un error");
            }
            return res.json();
        })
        .then((data) => {
            setProducts(data)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);


    return <section>
        <h1>{titulo}</h1>
        <ItemList lista={products}/>
    </section>
}