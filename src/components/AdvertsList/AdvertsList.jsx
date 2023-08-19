import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertsAsync, addToFavorite, removeFromeFavorites, setFavoriteAdverts } from "../../redux/reducers/rootReducer";
import { CardList, CardItem, AdvertCard, AdvertImage, FavoriteButton, StyledFillHeart, StyledOutlineHeart, H2, SpanModel, SpanPrice, List, Item, P, LearnMoreButton, LoadMoreButton } from './StyledAdvertsList';
import SearchFilter from "../SearchFilter/SearchFilter";
import AdvertModal from '../AdvertModal/AdvertModal';
import { favoritesUpdatedEvent } from "./favoritesUpdatedEvent";


function AdvertsList({type}) {
    const dispatch = useDispatch();
    const adverts = useSelector((state) => state.adverts.allAdverts);
    const favorites = useSelector((state) => state.adverts.favorites);

    const [visibleAdvertsCount, setVisibleAdvertsCount] = useState(8);
    const [filteredAdverts, setFilteredAdverts] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedAdvert, setSelectedAdvert] = useState(null);
    useEffect(() => {
        if (adverts.length === 0) {
            dispatch(fetchAdvertsAsync());
        } else {
            setFilteredAdverts(adverts);
            setVisibleAdvertsCount(8);
        }
    }, [dispatch, adverts]);

    useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteAdverts') || '[]');
        dispatch(setFavoriteAdverts(storedFavorites));
    }, [dispatch]);

    const handleToggleFavorite = (advert) => {   
        let updatedFavorites;

        if (favorites.some((fav) => fav.id === advert.id)) {
            updatedFavorites = favorites.filter((fav) => fav.id !== advert.id);
            localStorage.setItem('favoriteAdverts', JSON.stringify(updatedFavorites));
            dispatch(removeFromeFavorites(advert));

        } else {
            updatedFavorites = [...favorites, advert];
            localStorage.setItem('favoriteAdverts', JSON.stringify(updatedFavorites));
            dispatch(addToFavorite(advert));
        }

        console.log('Updated favorites:', updatedFavorites);
        favoritesUpdatedEvent.on('updated', (updatedFavorites) => {
            dispatch(setFavoriteAdverts(updatedFavorites));
        });
    };

    const handleShowDetails = (advert) => {
        setSelectedAdvert(advert);
    }
    
    const handleCloseModal = () => {
        setSelectedAdvert(null);
    }

    const handleLoadMore = () => {
        setVisibleAdvertsCount((prevCount) => prevCount + 8);
    };

    const handleFilter = (filtered) => {
        setFilteredAdverts(filtered);
        setVisibleAdvertsCount(8);
    };

      
    const arrayFOrRender = type === 'MAIN' && filteredAdverts || type === 'FAVORITES' && favorites || []; 

    return (
        <div>
            <SearchFilter
                adverts={adverts}
                onFilter={handleFilter}
                visibleAdvertsUpdater={setVisibleAdvertsCount}
                setSelectedBrand={setSelectedBrand}
            />
            {selectedAdvert && (
                <AdvertModal advert={selectedAdvert} onClose={handleCloseModal} />
            )}
            <CardList>
                {Array.isArray(arrayFOrRender) &&
                    arrayFOrRender.slice(0, visibleAdvertsCount).map((advert) => (
                    <CardItem key={advert.id}>{advert.title}
                        <AdvertCard>
                            <AdvertImage src={advert.img} alt={`${advert.make} ${advert.model}`} />
                                <H2>{advert.make}<SpanModel>{advert.model}</SpanModel>, {advert.year}<SpanPrice>{advert.rentalPrice}</SpanPrice></H2>
                                    <List>
                                    <Item><P>{advert.address}</P></Item>
                                    <Item><P>{advert.rentalCompany}</P></Item>
                                    <Item><P>{advert.type}</P></Item>
                                    <Item><P>{advert.model}</P></Item>
                                    <Item><P>{advert.accessories[0]}</P></Item>
                                    </List>
                            
                        <FavoriteButton onClick={() => handleToggleFavorite(advert)}>
                            {favorites.some((fav) => fav.id === advert.id) ? <StyledFillHeart /> : <StyledOutlineHeart />}
                        </FavoriteButton>
                        <LearnMoreButton onClick={() => handleShowDetails(advert)}>
                            learn More
                            </LearnMoreButton>
                        </AdvertCard>
                    </CardItem>
                ))}
            </CardList>
            {visibleAdvertsCount < arrayFOrRender.length && (
                <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
            )}
        </div>
    );
}

export default AdvertsList;