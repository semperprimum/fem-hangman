import { Squircle } from "corner-smoothing";
import styled from "styled-components";
import { useMatchMedia } from "../../../hooks/useMatchMedia";

interface CardProps {
  number: string;
  title: string;
  body: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const isTablet = useMatchMedia("(min-width: 48em)");

  return (
    <CardContainer
      cornerRadius={isTablet ? 40 : 20}
      cornerSmoothing={1}
    >
      <Number>{props.number}</Number>
      <Title>{props.title}</Title>
      <Body>{props.body}</Body>
    </CardContainer>
  );
};

const CardContainer = styled(Squircle)`
  background-color: var(--clr-neutral-100);
  color: var(--clr-primary-200);
  padding: 2rem;

  display: grid;
  grid-template-areas:
    "a b"
    "c c";
  grid-template-columns: 1.15rem 1fr;
  grid-template-rows: auto;

  column-gap: 1rem;
  row-gap: 1rem;

  @media only screen and (min-width: 48em) {
    grid-template-areas:
      "a b"
      "a c";
    grid-template-columns: 3rem 1fr;
    column-gap: 2.5rem;
    align-items: center;
    padding: 1.875rem 2.5rem;
  }

  @media only screen and (min-width: 90em) {
    grid-template-areas:
      "a"
      "b"
      "c";
    grid-template-columns: auto;
    grid-template-rows: subgrid;
    grid-row: span 3;
    align-items: unset;
    row-gap: 2.5rem;

    text-align: center;
    padding: 3.75rem 3rem;
  }
`;

const Number = styled.span`
  color: var(--clr-primary-100);
  font-size: 1.5rem;
  grid-area: a;

  @media only screen and (min-width: 48em) {
    font-size: 5.5rem;
  }

  @media only screen and (min-width: 90em) {
    font-size: var(--fs-400);
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 1.5rem;
  grid-area: b;

  @media only screen and (min-width: 48em) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 90em) {
    white-space: nowrap;
    font-size: var(--fs-300);
  }
`;

const Body = styled.p`
  color: #887dc0;
  grid-area: c;

  @media only screen and (min-width: 90em) {
    letter-spacing: 1.3px;
  }
`;
