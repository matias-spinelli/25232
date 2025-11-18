import { useState, useEffect, } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { data, useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import { Loader } from "../UI/Loader/Loader";

export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({});

    const { id } = useParams()

    useEffect(() => {

        getProductById(id).then((data)=> setDetail(data))
        .catch((error) => console.log(error));
        }, [id]);

    //     fetch("/data/products.json")
    //     .then((res) => {
    //         if(!res.ok) {
    //             throw new Error("Hubo un error");
    //         }
    //         return res.json();
    //     })
    //     .then((data) => {
    //         const found = data.find((p) => p.id === id)
    //         if (found) {
    //             setDetail(found);
    //         } else {
    //             throw new Error("Producto no encontrado");
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }, [id]);

    return (
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail} />
            ) : (
                <Loader />
            )}
        </main>
    );
};