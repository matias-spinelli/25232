const BASE_URL = "https://6902c2fbb208b24affe7275d.mockapi.io/products";

export const createProducts = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type" : "application/json" },
        body: JSON.stringify(product)
    });

    if(!res.ok) {
        throw new Error("No se pudo crear el producto");
    }

    const result = await res.json()
    return result;
};

export const getProducts = async (category) => {
    let url = BASE_URL;
    if (category) {
        url = `${BASE_URL}?category=${category}`
    }

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Error al listar productos");
    }

    const results = await res.json();
    return results;
}

export const getProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) {
        throw new Error("Error al obtener el producto");
    }
    return await res.json();
}