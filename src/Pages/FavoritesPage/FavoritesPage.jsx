import { useSelector, useDispatch } from "react-redux";
import { addToFavorite, removeFromeFavorites } from '../../redux/reducers/rootReducer'
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import { useState } from "react";

function Favorites() {
    const favorites = useSelector((state) => state.adverts.favorites);
    const [visibleFavorites, setVisibleFavorites] = useState(favorites.slice(0, 8));
    const dispatch = useDispatch();

    console.log("Favorites State:", favorites);

    const handleToggleFavorite = (advert) => {
        if (favorites.includes(advert)) {
            dispatch(removeFromeFavorites(advert));
        } else {
            dispatch(addToFavorite(advert));
        }
    };

    const handleSearch = (filteredFavorite) => {
        setVisibleFavorites(filteredFavorite.slice(0, visibleFavorites.length));
    };

    return (
        <div>
            <h1>Favorites</h1>
            <SearchFilter adverts={favorites} onFilter={handleSearch} />
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