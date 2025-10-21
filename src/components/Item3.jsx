export const Item3 = ({ nombre, precio }) => {
    return (
        <article>
            <p>Item 3</p>
            <p>{nombre}</p>
            <p>Precio ${precio}</p>
        </article>
    );
};