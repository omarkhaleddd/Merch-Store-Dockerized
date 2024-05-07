import { useLoaderData } from "react-router-dom";
import ProductList from "../../components/ProductList"
import { getProducts } from "../../helper/compHelper";

export async function loader() {
    const products = await getProducts();
    console.log("products : ",products);
    return { products };
}


const Products = () => {
    const {products} = useLoaderData()
    console.log(products);
    return (
        <>
            {products === 500 ?
                <div className="text-center fs-2 text-danger mt-4">
                    <p>The Product service is not working</p>
                </div> : <ProductList products={products} />}
        </>
    )
}

export default Products
