import { Link } from "react-router-dom";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Check out our <Link to='/catalog'>catalog</Link>
                or view your <Link to='/favorites'>favorites</Link>.</p>
            <AdvertsList/>
        </div>
    );
}

export default Home;