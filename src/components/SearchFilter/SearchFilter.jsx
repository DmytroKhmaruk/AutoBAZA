import { useState, useEffect } from "react";
// import { SearchWrapper, SearchInput, SearchButton } from './StyledSearchFilter';
import { useSelector } from "react-redux";

function SearchFilter({ onFilter }) {
    const adverts = useSelector((state) => state.adverts.allAdverts);
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [priseFrom, setPriseFrom] = useState(30);
    const [mileageFrom, setMileageFrom] = useState('');
    const [mileageTo, setMileageTo] = useState('');

    useEffect(() => {
        if (adverts.length > 0) {
            const uniqueBrands = [...new Set(adverts.map((advert) => advert.make))];
            setBrands(uniqueBrands);
            console.log('brands', brands)
        }
    }, [adverts]);

    const handleBrandeChange = (e) => {
        const selectedBrand = e.target.value;
        setSelectedBrand(selectedBrand);

        const filteredAdverts = adverts.filter((advert) =>
            selectedBrand === '' || advert.make === selectedBrand);
        onFilter(filteredAdverts);
        console.log(filteredAdverts)
    };

    const handlePriceChange = (e) => {
        const newPriceFrom = parseInt(e.target.value);
        setPriseFrom(newPriceFrom);
    };

    const handleMileageFromChange = (e) => {
        const newMileageFrom = e.target.value;
        setMileageFrom(newMileageFrom);
    };

    const handleMileageToChange = (e) => {
        const newMileageTo = e.target.value;
        setMileageTo(newMileageTo);
    };

    const handleSearch = () => {
        const filteredAdverts = adverts.filter((advert) =>
            (selectedBrand === '' || advert.make === selectedBrand) &&
            (priseFrom <= parseInt(advert.rentalPrice.substring(1))) &&
            (mileageFrom === '' || parseFloat(advert.mileage) >= parseFloat(mileageFrom)) &&
            (mileageTo === '' || parseFloat(advert.mileage) <= parseFloat(mileageTo))
        );
        onFilter(filteredAdverts);
        setSelectedBrand(selectedBrand);
    };

    return (
        
    <div>
        <div>
            <label htmlFor="brand">Car Brand:</label>
            <select id="brand" value={selectedBrand} onChange={handleBrandeChange}>
            <option value="">All Brands</option>
            {brands.map((brand) => 
                <option key={brand} value={brand}>{brand}</option>
                )}
                </select>
        </div>
        <div>
                <label htmlFor="price">Price/ 1 hour</label>
                <input type="number" id="price" value={priseFrom} onChange={handlePriceChange} min='30' step='10'/>
            </div>
             <div>
                <label htmlFor="mileageFrom">Сar mileage / km</label>
                <input type="number" id="mileageFrom" value={mileageFrom} onChange={handleMileageFromChange}/>
            </div>
            <div>
                <label htmlFor="mileageFrom">Сar mileage / km</label>
                <input type="number" id="mileageFrom" value={mileageFrom} onChange={handleMileageFromChange}/>
            </div>
            <button onClick={handleSearch}>Search</button>
    </div>
       
    );
}

export default SearchFilter;
