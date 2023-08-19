import styled from "styled-components";

export const HeaderContainer = styled.header`
    border-bottom: 1px solid black;
    padding: 0 28px;
`;

export const NavContainer = styled.nav`
    ul {
        list-style: none;
        display: flex;
        padding: 0;
    }

    li {
        gap: 20px;
    }

    a {
        text-decoration: none;
    

    &.active{
        color: blue;
    }
}
`;