import { HeaderBorder, HeaderContainer, NavContainer, LogoContainer, ActiveNavLink } from './StyledHeader';
import RcSvgIcon from '../../svg/RcSvgIcon.svg'
function Header() {
    return (
        <HeaderBorder>
        <HeaderContainer>
              <LogoContainer>
                <a href="">
                    <img src={RcSvgIcon} width='64' heigth='64'/>
                    </a>
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