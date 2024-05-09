import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --clr-neutral-100: #FFFFFF;
    --clr-neutral-200: #243041;

    --clr-primary-100: #2463FF;
    --clr-primary-200: #261676;

    --gradient-1: linear-gradient(#FE71FE, #7199FF);
    --gradient-2: linear-gradient(#67B6FF, #FFFFFF);
    --gradient-3: linear-gradient(#1A043A 0%, #151278 70%, #2B1677 100%);

    --ff-primary: "Mouse Memoirs", -apple-system, system-ui, sans-serif;

    --fs-100: 1rem;
    --fs-200: 2rem;
    --fs-300: 1.5rem;
    --fs-400: 2.5rem;
    --fs-500: 3rem;

    @media only screen and (min-width: 48em) {
        --fs-100: 1.25rem;
        --fs-200: 2rem;
        --fs-300: 3rem;
        --fs-400: 4rem;
        --fs-500: 6.5rem;
    }

    @media only screen and (min-width: 90em) {
        --fs-100: 1.625rem;
        --fs-200: 2rem;
        --fs-300: 3rem;
        --fs-400: 5.5rem;
        --fs-500: 8.5rem;
    }

    /* Desktop: 
    8.5rem = heading xl
    5.5rem = heading l
    3rem = heading m
    2rem = heading s
    1.625 = body
    */

    /* Tablet: 
    6.5rem = heading xl
    4rem = heading l
    3rem = heading m
    2rem = heading s
    1.25rem = body
    */

    /* Mobile: 
    3rem = heading xl
    2.5rem = heading l
    1.5rem = heading m
    2rem = heading s
    1rem = body
    */
}

body {
    font-family: var(--ff-primary);
    font-size: var(--fs-100);
    background-color: #344ABA; 
    color: var(--clr-neutral-100);

    background-image: url("/images/background-mobile.svg");
    background-repeat: no-repeat;
    /* background-position: center; */
    background-size: cover;

    @media only screen and (min-width: 25em) {
       background-image: url("/images/background-tablet.svg"); 
    }
    
    @media only screen and (min-width: 48em) {
       background-image: url("/images/background-desktop.svg"); 
    }
}
`;
