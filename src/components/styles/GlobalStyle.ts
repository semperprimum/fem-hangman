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

/*
	Improved screen reader only CSS class
	@author Gaël Poupard
		@note Based on Yahoo!'s technique
		@author Thierry Koblentz
		@see https://www.cssmojo.com/hide-content-from-sighted-users/
	* 1.
		@note 'clip' is deprecated but works everywhere
		@see https://developer.mozilla.org/en-US/docs/Web/CSS/clip
	* 2.
		@note 'clip - path' is the future-proof version, but not very well supported yet
		@see https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
		@see http://caniuse.com/#search=clip-path
		@author Yvain Liechti
		@see https://twitter.com/ryuran78/status/778943389819604992
	* 3.
		@note preventing text to be condensed
		author J. Renée Beach
		@see https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
		@note Drupal 8 goes with word-wrap: normal instead
		@see https://www.drupal.org/node/2045151
		@see http://cgit.drupalcode.org/drupal/commit/?id=5b847ea
	* 4.
		@note !important is important
		@note Obviously you wanna hide something
		@author Harry Roberts
		@see https://csswizardry.com/2016/05/the-importance-of-important/
*/

.sr-only {
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
	-webkit-clip-path: inset(50%) !important;
		clip-path: inset(50%) !important;  /* 2 */
	height: 1px !important;
	margin: -1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
	white-space: nowrap !important;            /* 3 */
}

.sr-only-focusable:focus,
.sr-only-focusable:active {
	clip: auto !important;
	-webkit-clip-path: none !important;
		clip-path: none !important;
	height: auto !important;
	margin: auto !important;
	overflow: visible !important;
	width: auto !important;
	white-space: normal !important;
}
`;
