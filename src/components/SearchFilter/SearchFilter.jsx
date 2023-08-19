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
        }
    }, [adverts]);

    const handleBrandChange = (e) => {
        setSelectedBrand(e.target.value);

    //     const filteredAdverts = adverts.filter((advert) =>
    //         selectedBrand === '' || advert.make === selectedBrand);
    //     onFilter(filteredAdverts);
    //     console.log(filteredAdverts)
    };

    const handlePriceChange = (e) => {
        setPriseFrom(parseInt(e.target.value));
    };

    const handleMileageFromChange = (e) => {
        setMileageFrom(e.target.value);
    };

    const handleMileageToChange = (e) => {
        setMileageTo(e.target.value);
    };

    const handleSearch = () => {
        const filteredAdverts = adverts.filter((advert) => {
            const rentalPrice = parseInt(advert.rentalPrice.substring(1));
            const mileage = parseFloat(advert.mileage);

        return(
            (selectedBrand === '' || advert.make === selectedBrand) &&
                (priseFrom <= rentalPrice) &&
                (mileageFrom === '' || mileage >= parseFloat(mileageFrom)) &&
                (mileageTo === '' || mileage <= parseFloat(mileageTo))
        );
    });
        onFilter(filteredAdverts);
        // setSelectedBrand(selectedBrand);
    };

    const generatePriceOption = () => {
        const priseOption = [];
        for (let price = 30; price <= 500; price += (price < 100 ? 10 : 50)) {
            priseOption.push(
                <option key={price} value={price}>
                    {price}
                </option>
            );
        }
        return priseOption;
    };

    return (
        
    <div>
        <div>
            <label htmlFor="brand">Car Brand:</label>
            <select id="brand" value={selectedBrand} onChange={handleBrandChange}>
            <option value="">All Brands</option>
                    {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
            ))}
                </select>
        </div>
        <div>
                <label htmlFor="price">Price/ 1 hour</label>
                <select id="price" value={priseFrom} onChange={handlePriceChange}>
                    {generatePriceOption()}
                </select>
            </div>
             <div>
                <label htmlFor="mileage">Сar mileage / km</label>
                <input type="number" id="mileageFrom" placeholder='From' value={mileageFrom} onChange={handleMileageFromChange}/>
                <input type="number" id="mileageTo"  placeholder='To' value={mileageTo} onChange={handleMileageToChange}/>
            </div>
            <button onClick={handleSearch}>Search</button>
    </div>
       
    );
}

export default SearchFilter;
