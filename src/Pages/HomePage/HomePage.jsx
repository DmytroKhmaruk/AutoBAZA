import { ToCatalog, HomeContainer } from "./StyledHome";

function Home() {
    return (
        <HomeContainer>
        <h1>Welcome to the RentCar Website!</h1>
        <p>We provide a wide range of cars for rent in Ukraine.</p>
        <p>Explore our catalog and find the perfect car for your needs.</p>
        <ToCatalog to='/catalog'>Go to Catalog</ToCatalog>
        </HomeContainer>
    );
}

export default Home;