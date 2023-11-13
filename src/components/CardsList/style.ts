import styled from "styled-components";

export const CardsListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding: 50px;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: var(--color-bg-2);
    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        width: 1080px;
        height: 95%;
    }
`

export const StyledMainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-bg-2);
    @media (max-width: 1024px) {
        height: calc(100% - 8.1875rem);
    }
    @media (min-width: 1024px) {
        height: calc(100vh - 8.1875rem);
    }
`