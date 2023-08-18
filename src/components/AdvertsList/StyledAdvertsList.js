import styled from "styled-components";

export const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    padding: 0;
`;

export const AdvertCard = styled.div`
    width: 274px;
    display: inline-block;
    overflow: hidden;
        /* li { 
        list-style: none;
    } */
`;

export const AdvertImage = styled.img`
    width: 100%;
    height: 268px;
    border-radius: 14px;
    object-fit: cover;
`;