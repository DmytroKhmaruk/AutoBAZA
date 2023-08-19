import { useSelector } from "react-redux";
import AdvertsList from "../../components/AdvertsList/AdvertsList";

function Favorites() {
    const favorites = useSelector((state) => state.adverts.favorites);

    console.log("Favorites State:", favorites);



    return (
        <div>
            <h1>Favorites</h1>

            <AdvertsList type='FAVORITES' favorites={favorites}  />
        </div>
    );
}

export default Favorites;