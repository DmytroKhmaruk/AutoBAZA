import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/catalog'>Catalog</NavLink></li>
                        <li><NavLink to='/favorite'>Favorite</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default Layout;