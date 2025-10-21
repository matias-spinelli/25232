export const Item1 = ({ nombre, precio }) => {
    return (
        <article>
            <p>Item 1</p>
            <p>{nombre}</p>
            <p>Precio ${precio}</p>
        </article>
    );
};