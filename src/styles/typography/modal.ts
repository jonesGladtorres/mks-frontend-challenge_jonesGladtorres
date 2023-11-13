import styled from "styled-components";

export const StyledTitleModal = styled.h2`
    color: var(--font-color-1);
    font-size: var(--font-size-9);
    font-weight: var(--font-weight-4);
    width: 80%;
`

export const StyledPriceAndTextAndButtonModal = styled.span`
    color: var(--font-color-1);
    font-size: var(--font-size-10);
    font-weight: var(--font-weight-4);
    line-height: var(--lane-height-2);
`

export const StyledNameProductInCart = styled.h3`
    color: var(--font-color-2);
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-4);
    line-height: 1.0625rem;
    width: 4rem;
`

export const StyledCountInCart = styled.span`
    color: var(--font-color-3);
    font-size: 0.6rem;
    font-weight: 400;
    line-height: normal;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${({content}) => {
        switch (content) {
            case 'yes':
                return 'border-left: 1px solid #2c2c2c59; border-right: 1px solid #2c2c2c59; padding: 0 3px; cursor: text;'
            default:
                return 'none'
        }
    }}
`

export const StyledPriceProductInCart = styled.span`
    color: var(--font-color-3);
    font-size: var(--font-size-4);
    font-weight: var(--font-weight-4);
    line-height: 1.0625rem;
`