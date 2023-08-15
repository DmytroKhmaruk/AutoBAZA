import { useSelector, useDispatch } from "react-redux";
import { addToFavorite, removeFromeFavorites } from '../../redux/reducers/rootReducer'

function Favorites() {
    const favorites = useSelector((state) => state.adverts.favorites);
    const dispatch = useDispatch();

    console.log("Favorites State:", favorites);

    const handleToggleFavorite = (advert) => {
        if (favorites.includes(advert)) {
            dispatch(removeFromeFavorites(advert));
        } else {
            dispatch(addToFavorite(advert));
        }
    };

    return (
        <div>
            <h1>Favorites</h1>
            <ul>
                {favorites.map((advert) => (
                    <li key={advert.id}>{advert.title}
                        <button onClick={() => handleToggleFavorite(advert)}>
                            {favorites.includes(advert) ? 'Remove' : 'Add'} to Favorites
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favorites;