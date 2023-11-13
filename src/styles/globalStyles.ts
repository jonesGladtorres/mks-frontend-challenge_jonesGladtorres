'use client'

import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        list-style-type: none;
    }

    html{
        width: 100vw;
        height: 100vh;
    }
    :root{
        --color-bg-1: #0F52BA;
        --color-bg-2: #F9F9F9;
        --color-bg-3: #FFFFFF;
        --color-bg-4: #373737;
        --color-bg-5: #EEE;

        --font-color-1: #FFFFFF;
        --font-color-2: #2C2C2C;
        --font-color-3: #000;

        --font-family-1: 'Montserrat', sans-serif;

        --font-weight-1: 300;
        --font-weight-2: 400;
        --font-weight-3: 600;
        --font-weight-4: 700;

        --font-size-1: 0.625rem;
        --font-size-2: 0.75rem;
        --font-size-3: 0.8125rem;
        --font-size-4: 0.875rem;
        --font-size-5: 0.9375rem;
        --font-size-6: 1rem;
        --font-size-7: 1.125rem;
        --font-size-8: 1.25rem;
        --font-size-9: 1.6875rem;
        --font-size-10: 1.75rem;
        --font-size-11: 2.5rem;

        --lane-height-1: 0.75rem;
        --lane-height-2: 0.9375rem;
        --lane-height-3: 1.125rem;
        --lane-height-4: 1.1875rem;
    }
`