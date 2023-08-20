import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`
    display: block;
    text-align: center;
`;

export const ToCatalog = styled(NavLink)`

   color: #3470FF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration-line: underline;

    border: none;
    cursor: pointer;
`;