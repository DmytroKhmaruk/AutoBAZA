import { HeaderBorder, HeaderContainer, NavContainer, LogoContainer, ActiveNavLink } from './StyledHeader';
import RcSvgIcon from '../../svg/RcSvgIcon.svg'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <HeaderBorder>
        <HeaderContainer>
              <LogoContainer>
                <Link to='/'>
                    <img src={RcSvgIcon} alt='RentCar' width='64' heigth='64'/>
                    </Link>
                </LogoContainer>
            <NavContainer>
              

                <ul>
                    <li><ActiveNavLink to='/' exact='true'>Home</ActiveNavLink></li>
                    <li><ActiveNavLink to='/catalog'>Catalog</ActiveNavLink></li>
                    <li><ActiveNavLink to='/favorites'>Favorites</ActiveNavLink></li>
                </ul>
            </NavContainer>
        </HeaderContainer>
        </HeaderBorder>
    );
}

export default Header;