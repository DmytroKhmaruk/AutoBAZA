import { IoIosArrowDown } from 'react-icons/io';

import styled from 'styled-components';


export const SelectWrapper = styled.select`
    position: relative;
    display: inline-block;
`;

export const StyledSelect = styled.select`
-webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 30px;

    border-radius: 14px;
    padding: 14px 18px;
    border: none;
    background: #F7F7FB;
  `;

  export const StyledArrowDown = styled(IoIosArrowDown)`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`;