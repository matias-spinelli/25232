import { validateProduct } from "../../../utils/validateProducts";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProducts } from "../../../services/products";
import "../ProductFormContainer/ProductFormContainer.css"

export const ProductFormContainer = () => {
    const [loading, setLoading] = useState();
    const [errors, setErrors] = useState();
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value });
    };

    const handleSubmit = async () => {
        e.preventDefault()
        setErrors({});
        setLoading(true);

        const newErrors = validateProduct({...product, file });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try{
            const imageUrl = await uploadToImgbb(file); 
            const productData = {
                ...product, price: Number(product.price), imageUrl,
            }

            await createProducts(productData)
            alert("Producto cargado con exito");

            setProduct({name: "", price: "", description: "", category: ""});
            setFile(null);

        } catch (error) {
            setErrors({general: error.message});
        } finally {
            setLoading(false);
        }
    }

    return <ProductFormUI product={product} errors={errors} onChange={handleChange} onFileChange={setFile} loading={loading} onSubmit={handleSubmit}/>
}