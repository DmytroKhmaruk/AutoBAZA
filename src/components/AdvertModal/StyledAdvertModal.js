import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(18, 20, 23, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
`;

export const ModalContent = styled.div`
    background-color: #ffffff;
    padding: 40px;
    border-radius: 24px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 541px;
    height: 672px;
    
    img {

    }
`;
