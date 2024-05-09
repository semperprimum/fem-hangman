import styled, { css } from "styled-components";

export const Button = styled.button<{ $secondary?: boolean }>`
  color: var(--clr-neutral-100);
  background-color: var(--clr-primary-100);
  border: none;
  line-height: 1.2;
  letter-spacing: 1px;

  text-transform: uppercase;
  font-size: var(--fs-200);

  padding: 0.75rem 4rem;
  border-radius: 2.5rem;

  box-shadow: inset 0 -2px 0 3px #140e66, inset 0 1px 0 6px #3c74ff;

  ${(props) =>
    props.$secondary &&
    css`
      background-image: var(--gradient-1);
      box-shadow: inset 0 -2px 0 3px #140e66, inset 0 1px 0 6px #c642fb;
    `}
`;
