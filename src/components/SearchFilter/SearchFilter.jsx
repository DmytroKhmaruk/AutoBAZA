import { useState, useEffect } from "react";
// import { SearchWrapper, SearchInput, SearchButton } from './StyledSearchFilter';
import { useSelector } from "react-redux";

function SearchFilter({ onFilter, visibleAdvertsUpdater }) {
    const adverts = useSelector((state) => state.adverts.allAdverts);
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');

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
        visibleAdvertsUpdater(filteredAdverts);
        console.log(filteredAdverts)
    };

    // const handleSearch = () => {
    //     const filteredAdverts = adverts.filter(advert =>
    //         advert.make.toLowerCase().includes(brandFilter.toLowerCase()) &&
    //         (priceFilter === '' || parseFloat(advert.rentalPrice.substring(1)) <= parseFloat(priceFilter))
    //     );
    //     onFilter(filteredAdverts);
    // };

    return (
        // <SearchWrapper>
        //     <SearchInput
        //         type="text"
        //         placeholder="Car Brand"
        //         value={brandFilter}
        //         onChange={(e) => setBrandFilter(e.target.value)} />
        //     <SearchInput
        //         type="number"
        //         placeholder="Price / 1 hour"
        //         value={priceFilter}
        //         onChange={(e) => setPriceFilter(e.target.value)} />
        //     <SearchButton onClick={handleSearch}>Search</SearchButton>
        // </SearchWrapper>
        <div>
            <label htmlFor="brand">Car Brand:</label>
            <select id="brand" value={selectedBrand} onChange={handleBrandeChange}>
            <option value="">All Brands</option>
            {brands.map((brand) => 
                <option key={brand} value={brand}>{brand}</option>
                )}
                </select>
        </div>
    );
}

export default SearchFilter;
