import styled from "styled-components";
import IconMenu from "../../../assets/images/icon-menu.svg?react";
import IconHeart from "../../../assets/images/icon-heart.svg?react";
import { CircleButton } from "../../../components";
import { ProgressBar } from "./ProgressBar";
import { useGame } from "../../../context/GameContext";

interface HeaderProps {
  openModal: (title: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const gameContext = useGame();

  return (
    <HeaderContainer>
      <Left>
        <CircleButton
          icon={<IconMenu />}
          onClick={() => {
            openModal("Paused");
          }}
        />
        <CategoryName>{gameContext.selectedCategory}</CategoryName>
      </Left>
      <Right>
        <ProgressBar value={12.5 * gameContext.lives} />
        <IconHeart />
      </Right>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  padding-top: 2.875rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media only screen and (min-width: 48em) {
    gap: 2rem;  
  }

  @media only screen and (min-width: 90em) {
    gap: 3.5rem;
  }
`;

const CategoryName = styled.div`
  font-size: var(--fs-400);
  letter-spacing: -0.2px;

  @media only screen and (min-width: 48em) {
    letter-spacing: 2.4px;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  @media only screen and (min-width: 48em) {
    gap: 2.5rem;
  }

  svg {
    display: block;
    width: 1.625rem;
    height: 100%;

    @media only screen and (min-width: 48em) {
      width: 3.375rem;
    }
  }
`;
