import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertsAsync, addToFavorite, removeFromeFavorites } from "../../redux/reducers/rootReducer";

function AdvertsList() {
    const dispatch = useDispatch();
    const adverts = useSelector((state) => state.adverts.allAdverts);
    const favorites = useSelector((state) => state.adverts.favorites);
    console.log(adverts)

    const [visibleAdverts, setVisibleAdverts] = useState(8)

    useEffect(() => {
        dispatch(fetchAdvertsAsync());
    }, [dispatch]);

    const handleToggleFavorite = (advert) => {
        if (favorites.some((fav) => fav.id === advert.id)) {
            dispatch(removeFromeFavorites(advert));
        } else {
            dispatch(addToFavorite(advert));
        }
    };
    const handleShowDetails = (advertId) => {
        
    }

    const handleLoadMore = () => {
        setVisibleAdverts((prevVisibleAdverts) => prevVisibleAdverts + 8);
    };

    return (
        <div>
            <h1>List of ads</h1>
            <ul>
                {adverts.map((advert) => (
                    <li key={advert.id}>{advert.title}
                        <button onClick={() => handleToggleFavorite(advert)}>
                            {favorites.includes(advert) ? 'Remove' : 'Add'} to Favorites
                        </button>
                        <button onClick={() => handleShowDetails(advert.id)}>
                            learn More
                        </button>
                    </li>
                ))}
            </ul>
            {visibleAdverts < adverts.length && (
                <button onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
}

export default AdvertsList;