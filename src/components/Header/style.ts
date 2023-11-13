'use client'

import styled from "styled-components";

export const StyledContainerHeader = styled.header`
    display: flex;
    width: 100vw;
    height: 6rem;
    align-items: center;
    justify-content: space-between;
    background: var(--color-bg-1);
    padding: 0 20px;
    @media (min-width: 1024px) {
        padding: 0 8%;
    }
`

export const StyledContainerTitleHeader = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.3rem;
`