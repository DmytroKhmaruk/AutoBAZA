import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const HeaderBorder = styled.header`
    border-bottom: 1px solid black;
`;

export const HeaderContainer = styled.div`
    width: 1224px;
    margin: 0 auto;
    padding: 0 28px;
    display: flex;
    align-items: center;

`;

export const NavContainer = styled.nav`
margin-left: 396px;
    ul {
        list-style: none;
        display: flex;
        padding: 0;
        gap: 60px;
    }

    li {
        
    }

    a {
        text-decoration: none;
        font-weight: bold;
        display: flex;
    }

    &.active{
        color: blue;
    }

`;



export const LogoContainer = styled.div`

`;


export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: gray;
    &:active,
    &:hover {
    font-weight: 700;
    color: black;
    }
`;

export const ActiveNavLink = styled(StyledNavLink)`
  &.active{
    color: black;
  }
    `;