import { NavLink } from 'react-router-dom';
import { HeaderContainer, NavContainer } from './StyledHeader';

function Header() {
    return (
        <HeaderContainer>
            <NavContainer>
                <ul>
                    <li><NavLink to='/' activeClassName='active' exact>Home</NavLink></li>
                    <li><NavLink to='/catalog' activeClassName='active'>Catalog</NavLink></li>
                    <li><NavLink to='/favorites' activeClassName='active'>Favorites</NavLink></li>
                </ul>
            </NavContainer>
        </HeaderContainer>
    );
}

export default Header;