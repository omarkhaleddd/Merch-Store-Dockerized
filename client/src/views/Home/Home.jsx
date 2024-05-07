import bgImg from '../../assets/home/bg.jpg'
import { getProducts, getWeather } from '../../helper/compHelper';
import ProductList from '../../components/ProductList'
import { useLoaderData } from 'react-router-dom';
import Weather from '../Weather/Weather';

export async function loader() {
    const products = await getProducts();
    const weather = await getWeather();
    console.log(products, weather);
    return { products, weather };
}

const Home = () => {

    const { products, weather } = useLoaderData()
    console.log(weather);

    return (
        <>
            {weather === 500 ?
                <div className="text-center fs-2 text-danger mt-4">
                    <p>The Weather service is not working</p>
                </div> : <Weather weather={weather} />}
            <div className="hero">
                <div className="card bg-dark text-white border-0 h-100">
                    <img src={bgImg} className="card-img h-100vh object-fit-cover" alt="background" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
                </div>
                {products === 500 ?
                    <div className="text-center fs-2 text-danger mt-4">
                        <p>The Product service is not working</p>
                    </div> : <ProductList products={products} />}
            </div>
        </>
    )
}

export default Home
