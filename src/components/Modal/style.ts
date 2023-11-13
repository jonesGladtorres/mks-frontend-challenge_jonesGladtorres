import styled from "styled-components";

export const StyledContainerCartModal = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-bg-1);
    box-shadow: -6px 1px 7px -3px rgba(0,0,0,0.52);
    -webkit-box-shadow: -6px 1px 7px -3px rgba(0,0,0,0.52);
    -moz-box-shadow: -6px 1px 7px -3px rgba(0,0,0,0.52);
    @media (min-width: 550px) {
        width: 400px;
    }
`

export const StyledHeaderCartModal = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6.25rem;
    padding: 0px 30px;
`

export const StyledProductsCartModal = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 30px;
`

export const StyledTotalCartModal = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
`

export const StyledButtonCartModal = styled.button`
    width: 100%;
    height: 10vh;
    background: var(--font-color-3);
    border: none;
    cursor: pointer;
`

export const StyledButtonCloseModal = styled.button`
    background-color: var(--font-color-3);
    border-radius: 50%;
    color: var(--font-color-1);
    height: 30px;
    width: 30px;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    &:hover{
        transform: translateY(2px);
    }
`

export const StyledContainerProductsInCart = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`