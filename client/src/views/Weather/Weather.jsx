import { getProducts } from '../../helper/compHelper';

const Weather = ({ weather }) => {

    return (
        <div className="text-center fs-2 my-2">
            <p>{weather.value}</p>
        </div>
    )
}

export default Weather
