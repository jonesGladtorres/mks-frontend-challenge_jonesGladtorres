import styled from "styled-components";

export const StyledCardProductsContainer = styled.li`
    display: flex;
    flex-direction: column;
    width: 15rem;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    box-shadow: -1px 2px 7px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 2px 7px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 2px 7px 0px rgba(0,0,0,0.75);
    background: var(--color-bg-3);
    padding-top: 0.5rem;
    transition: transform 0.3s ease;
    &:hover{
        transform: perspective(1px) scale(1.0388);
    }
`

export const StyledCardProductsImage = styled.img`
    height: 8.6rem;
    width: 8rem;
`

export const StyledContainerNameCardProducts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px;
` 

export const StyledContainerPrice = styled.span`
    background: var(--color-bg-4);
    width: 5.5rem;
    border-radius: 0.31rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.6rem;
`

export const StyledButtonContainerCardsProducts = styled.button`
    width: 100%;
    height: 2rem;
    border-radius: 0 0 0.5rem 0.5rem;
    background: var(--color-bg-1);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;
`