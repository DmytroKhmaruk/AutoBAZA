import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertsAsync, addToFavorite, removeFromeFavorites } from "../../redux/reducers/rootReducer";
import { CardList, AdvertCard, AdvertImage } from './StyledAdvertsList';
import SearchFilter from "../SearchFilter/SearchFilter";

function AdvertsList() {
    const dispatch = useDispatch();
    const adverts = useSelector((state) => state.adverts.allAdverts);
    const favorites = useSelector((state) => state.adverts.favorites);
    
    console.log(adverts, 5)

    const [visibleAdvertsCount, setVisibleAdvertsCount] = useState(8);
    const [filteredAdverts, setFilteredAdverts] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');

    useEffect(() => {
        if (adverts.length === 0) {
            dispatch(fetchAdvertsAsync());
        } else {
            setFilteredAdverts(adverts);
            setVisibleAdvertsCount(8);
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
        setVisibleAdvertsCount((prevCount) => prevCount + 8);
    };

    const handleFilter = (filtered) => {
        setFilteredAdverts(filtered);
        setVisibleAdvertsCount(8);
    };

    // const visibleAdverts = filteredAdverts.slice(0, visibleAdvertsCount);
      

    return (
        <div>
            <h1>List of ads</h1>
            <SearchFilter
                adverts={adverts}
                onFilter={handleFilter}
                visibleAdvertsUpdater={setVisibleAdvertsCount}
                setSelectedBrand={setSelectedBrand}
            />
            <CardList>
                {Array.isArray(filteredAdverts) &&
                    filteredAdverts.slice(0, visibleAdvertsCount).map((advert) => (
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
            {visibleAdvertsCount < filteredAdverts.length && (
                <button onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
}

export default AdvertsList;