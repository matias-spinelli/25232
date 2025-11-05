const BASE_URL = "https://6902c2fbb208b24affe7275d.mockapi.io/products";

export const createProducts = async () => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type:" : "application/json" },
        body: JSON.stringify(product)
    });

    if(!res.ok) {
        throw new Error("No se pudo crear el producto");
    }

    const result = await res.json()
    return result;
};
