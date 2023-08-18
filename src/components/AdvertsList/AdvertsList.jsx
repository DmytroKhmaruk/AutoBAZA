import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertsAsync, addToFavorite, removeFromeFavorites } from "../../redux/reducers/rootReducer";
import { CardList, AdvertCard, AdvertImage } from './StyledAdvertsList';
import SearchFilter from "../SearchFilter/SearchFilter";

function AdvertsList() {
    const dispatch = useDispatch();
    const adverts = useSelector((state) => state.adverts.allAdverts);
    const favorites = useSelector((state) => state.adverts.favorites);
    
    console.log(adverts)

    // const [adverts, setAdverts] = useState([])
    const [visibleAdvertsCount, setVisibleAdverts] = useState(8);
    const [selectedBrand, setSelectedBrand] = useState('');

    useEffect(() => {
        if (adverts.length === 0) {
            dispatch(fetchAdvertsAsync());
        }
    }, [dispatch, adverts]);

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

    const handleSearch = (filteredAdverts) => {
        setVisibleAdverts(filteredAdverts.slice(0, visibleAdvertsCount));

        if (visibleAdvertsCount > filteredAdverts.length) {
            setVisibleAdverts(filteredAdverts.length);
        }
    };

    const visibleAdverts = selectedBrand ? adverts.filter(
        advert => advert.make === selectedBrand).slice(0, visibleAdvertsCount) : adverts.slice(0, visibleAdvertsCount)

    return (
        <div>
            <h1>List of ads</h1>
            <SearchFilter adverts={adverts} onFilter={handleSearch} visibleAdvertsUpdater={setVisibleAdverts}
                selectedBrandUpdater={setSelectedBrand} />
            <CardList>
                {Array.isArray(visibleAdverts) &&
                    visibleAdverts.map((advert) => (
                    <li key={advert.id}>{advert.title}
                        <AdvertCard>
                            <AdvertImage src={advert.img} alt={`${advert.make} ${advert.model}`} />
                            <h2>{advert.make} {advert.model} {advert.year}</h2>
                            <p>{advert.rentalPrice}</p>
                        <button onClick={() => handleToggleFavorite(advert)}>
                            {favorites.some((fav) => fav.id === advert.id) ? 'Remove' : 'Add'} to Favorites
                        </button>
                        <button onClick={() => handleShowDetails(advert.id)}>
                            learn More
                            </button>
                        </AdvertCard>
                    </li>
                ))}
            </CardList>
            {visibleAdvertsCount < adverts.length && (
                <button onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
}

export default AdvertsList;