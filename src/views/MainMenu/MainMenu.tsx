import styled from "styled-components";
import Logo from "../../assets/images/logo.svg?react";
import { PlayButton } from "./components/PlayButton";
import { Button } from "../../components";
import { Link } from "react-router-dom";

export const MainMenu = () => {
  return (
    <MainMenuWrapper>
      <MainMenuContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <PlayButton
          as={Link}
          to="/categories"
        />

        <ButtonContainer>
          <Button
            to="/howtoplay"
            as={Link}
          >
            how to play
          </Button>
        </ButtonContainer>
      </MainMenuContainer>
    </MainMenuWrapper>
  );
};

const MainMenuWrapper = styled.div`
  min-height: 100vh;

  display: grid;
  place-items: center;
`;

const MainMenuContainer = styled.div`
  position: relative;

  width: min(100%, 37rem);
  background-image: linear-gradient(#344aba, #001479cc);
  padding: 4rem 2rem;
  border-radius: 4.5rem;

  box-shadow: inset 0 -8px 0 4px #140e66, inset 0 6px 0 8px #2463ff;
`;

const LogoContainer = styled.div`
  margin-inline: auto;
  width: min(100%, 23.375rem);

  svg {
    margin-top: -100%;
    width: 100%;
    height: 100%;
  }

  margin-bottom: 3.375rem;
`;

const ButtonContainer = styled.div`
  margin-top: 3.625rem;

  a {
    display: block;
    margin-inline: auto;
    max-width: fit-content;
  }
`;
