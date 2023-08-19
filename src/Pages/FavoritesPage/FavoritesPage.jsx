import { useDispatch, useSelector } from "react-redux";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import { setFavoriteAdverts } from "../../redux/reducers/rootReducer";
import { useEffect, useState } from "react";
import { favoritesUpdatedEvent } from "../../components/AdvertsList/favoritesUpdatedEvent";

function Favorites() {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.adverts.favorites);
    const [favoritesLoaded, setFavoritesLoaded] = useState(false);
    
    useEffect(() => {
        const loadFavoritesFromStorage = async () => {
            const storedFavorites = JSON.parse(localStorage.getItem('favoriteAdverts') || '[]');
            dispatch(setFavoriteAdverts(storedFavorites));
            setFavoritesLoaded(true);
        };

        loadFavoritesFromStorage();
    }, [dispatch]);

    useEffect(() => {
        const handleFavoritesUpdated = (updateFavorites) => {
            dispatch(setFavoriteAdverts(updateFavorites));
        };
        favoritesUpdatedEvent.on('updated', handleFavoritesUpdated);

        return () => {
            favoritesUpdatedEvent.off('updated', handleFavoritesUpdated);
        };
    }, [dispatch]);

    if (!favoritesLoaded) {
        return <p>Loading...</p>;
    }
    console.log("Favorites State:", favorites);



    return (
        <div>
            <h1>Favorites</h1>

            <AdvertsList type='FAVORITES' />
        </div>
    );
}

export default Favorites;