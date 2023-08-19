import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default Layout;