import styled from "styled-components";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

export const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
    padding: 0;
`;

export const CardItem = styled.li`
    list-style: none;
`;

export const AdvertCard = styled.div`
    width: 285px;
    display: inline-block;
    overflow: hidden;
    position: relative;
    border-radius: 14px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const AdvertImage = styled.img`
    width: 100%;
    height: 268px;
    border-radius: 14px;
    object-fit: cover;
    margin-bottom: 14px;
`;

export const AdvertDetails = styled.div`

`;

export const ModelYearPrice = styled.div`
    display: flex;
    align-items: center;
`;

export const H2 = styled.h2`
    padding: 0 6px;
    margin: 0;
    margin-bottom: 8px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    display: flex;
`;

export const SpanModel = styled.span`
    color: #3470FF;
    margin-left: 6px;
`;

export const SpanPrice = styled.span`
    margin-left: auto;
`;

export const List = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.li`
    list-style: none;
    padding: 0 6px;
    &:not(:last-child){
    border-right: 1px solid rgba(18, 20, 23, 0.10);
    }



`;

export const P = styled.p`
    color: rgba(18, 20, 23, 0.50);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin: 0;
`;

export const FavoriteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    display: block;
    z-index: 2;
`;

export const StyledOutlineHeart = styled(AiOutlineHeart)`
    fill: #ffffff;
    font-size: 18px;
`;
 
export const StyledFillHeart = styled(AiFillHeart)`
    fill: #3470FF;
    font-size: 18px;
`;

export const LearnMoreButton = styled.button`
    width: 100%;
    border-bottom: 14px;
    background: #3470FF;
    border: none;
    color: #ffffff;
    cursor: pointer;
    padding: 12px 0;
    margin-top: 28px;
`;

export const LoadMoreButton = styled.button`
    display: flex;
   color: #3470FF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration-line: underline;
    border: none;
    background-color: #ffffff;
    margin: 100px auto 150px;
    cursor: pointer;
`;