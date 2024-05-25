import styled from "styled-components";

export const CategoryButton = styled.button`
  background: var(--clr-primary-100);
  border: none;
  color: var(--clr-neutral-100);
  border-radius: 1.25rem;
  padding: 1.5rem 4rem;

  box-shadow: inset 0 -2px 0 3px #140e66, inset 0 1px 0 6px #3c74ff;

  text-align: center;
  text-transform: uppercase;
  font-size: var(--fs-300);
  letter-spacing: 1.3px;

  @media only screen and (min-width: 48em) {
    display: grid;
    place-items: center;
    padding: 1rem;
    border-radius: 2.5rem;
  }

  @media only screen and (min-width: 90em) {
    transition: filter 150ms ease;
    cursor: pointer;

    &:hover {
      filter: brightness(1.25);
    }
  }
`;
