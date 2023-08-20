import { useState, useEffect } from "react";
import { FilterContainer, Label, Select, InputGroup, InputFrom, InputTo,SearchButton, StyledArrowDown } from './StyledSearchFilter';
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
        
    <FilterContainer>
        <div>
            <Label htmlFor="brand">Car Brand</Label>
            <Select id="brand" value={selectedBrand} onChange={handleBrandChange}>
            <option value="">All Brands</option>
                    {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
            ))}
                </Select>
                <StyledArrowDown size={20}/>
        </div>
        <div>
                <Label htmlFor="price">Price/ 1 hour</Label>
                <Select id="price" value={priseFrom} onChange={handlePriceChange}>
                    {generatePriceOption()}
                </Select>
                <StyledArrowDown size={20}/>
            </div>
             <InputGroup>
                <Label htmlFor="mileage">Сar mileage / km</Label>
                <InputFrom type="number" id="mileageFrom" placeholder='From' value={mileageFrom} onChange={handleMileageFromChange}/>
                <InputTo type="number" id="mileageTo"  placeholder='To' value={mileageTo} onChange={handleMileageToChange}/>
            </InputGroup>
            <SearchButton onClick={handleSearch}>Search</SearchButton>
    </FilterContainer>
       
    );
}

export default SearchFilter;
