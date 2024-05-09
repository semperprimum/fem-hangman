import styled from "styled-components";

interface CircleButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

export const CircleButton: React.FC<CircleButtonProps> = ({
  icon,
  onClick,
}) => {
  return <Button onClick={onClick}>{icon}</Button>;
};

const Button = styled.button`
  border: none;
  background-image: var(--gradient-1);
  border-radius: 100vmax;
  padding: 0.75rem;

  width: 2.5rem;
  aspect-ratio: 1 / 1;

  display: grid;
  place-items: center;

  box-shadow: inset 0 -5px 0 -1px #9d2df540;

  svg {
    width: 1.125rem;
    display: block;
    height: 100%;
  }

  @media only screen and (min-width: 48em) {
    box-shadow: inset 0 -6px 0 7px #9d2df540;
    width: 4rem;

    svg {
      width: 1.75rem;
    }
  }

  @media only screen and (min-width: 90em) {
    width: 5.875rem;

    svg {
      width: 2.5rem;
    }
  }
`;
