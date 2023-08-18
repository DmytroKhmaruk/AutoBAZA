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
    const [visibleAdvertsCount, setVisibleAdvertsCount] = useState(0);
    const [visibleAdverts, setVisibleAdverts] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');

    useEffect(() => {
        if (adverts.length === 0) {
            dispatch(fetchAdvertsAsync());
        } else {
            setVisibleAdvertsCount(8);
            setVisibleAdverts(adverts.slice(0, 8));
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
        setVisibleAdverts((prevVisibleAdverts) => {
            const newVisibleAdvartsCount = prevVisibleAdverts + 8;
            return adverts.slice(0, newVisibleAdvartsCount);
        });
    };

    const handleSearch = (filteredAdverts) => {
        setSelectedBrand('');
  
        const limitedVisibleAdverts = filteredAdverts.slice(0, 8)
        if (filteredAdverts.length < 8) {
            setVisibleAdvertsCount(filteredAdverts.length);
        } else {
            setVisibleAdvertsCount(8)
        }
        
        setVisibleAdverts(limitedVisibleAdverts);
    };

    // const visibleAdverts = selectedBrand ? adverts.filter(
    //     advert => advert.make === selectedBrand).slice(0, visibleAdvertsCount) : adverts.slice(0, visibleAdvertsCount)

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