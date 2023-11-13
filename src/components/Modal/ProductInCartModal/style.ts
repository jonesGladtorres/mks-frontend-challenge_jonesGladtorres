import styled from "styled-components";

export const StyledContainerProductInCart = styled.li`
    display: flex;
    background-color: var(--color-bg-3);
    border-radius: 0.5rem;
    padding: 0.625rem;
    gap: 1.5rem;
    align-items: center;
    position: relative;
    justify-content: space-between;
    transition: transform 0.3s ease;
    &:hover{
        transform: perspective(1px) scale(1.0388);
    }
`

export const StyledImageProductInCart = styled.img`
    width: 50px;
    height: 50px;
`

export const StyledContainerCountProductInCart = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 3rem;
    height: 1.4rem;
    border: 1px solid #2c2c2c59;
    border-radius: 0.25rem;
`

export const StyledButtonDeleteProductInCart = styled.button`
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    background: var(--font-color-3);
    color: var(--font-color-1);
    width: 20px;
    height: 20px;
    border: none;
    z-index: 10;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover{
        transform: translateY(2px);
    }
`