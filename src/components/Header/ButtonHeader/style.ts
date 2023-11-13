import styled from "styled-components";

export const ButtonCartModal = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 5rem;
    height: 2.8rem;
    border: none;
    border-radius: 0.5rem;
    transition: transform 0.3s ease;
    cursor: pointer;
    &:hover{
        transform: translateY(2px);
    }
`