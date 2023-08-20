import { IoIosArrowDown } from 'react-icons/io';

import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    gap: 20px;
`;  

export const Label = styled.label`
    font-weight: bold;
`;  



export const Select = styled.select`
    border-radius: 14px;
    padding: 14px 18px;
    border: none;
    background: #F7F7FB;
`;

export const InputGroup = styled.div`

`;

export const Input = styled.input`
    padding: 14px 0 14px 24px;
    border: none;
    background: #F7F7FB;
    border-radius: 14px 0px 0px 14px;
`;

export const InputFrom = styled(Input)`
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.20);
`;

export const InputTo = styled(Input)`
    border-radius: 0px 14px 14px 0px;
`;

export const SearchButton = styled.button`

`;

export const StyledArrowDown = styled(IoIosArrowDown)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`;