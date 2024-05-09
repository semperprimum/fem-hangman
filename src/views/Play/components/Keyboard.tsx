import { Squircle } from "corner-smoothing";
import styled, { css } from "styled-components";
import { useGame } from "../../../context/GameContext";

const letters: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const Keyboard = () => {
  const gameContext = useGame();

  return (
    <KeyboardContainer>
      {letters.map((letter) => (
        <Key
          $selected={gameContext.guessedLetters.includes(letter)}
          key={letter}
          role="button"
          cornerRadius={8}
          cornerSmoothing={1}
          onClick={() => gameContext.guessLetter(letter)}
        >
          {letter}
        </Key>
      ))}
    </KeyboardContainer>
  );
};

const KeyboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: 3.5rem;

  column-gap: 0.5rem;
  row-gap: 1.5rem;

  margin-top: 7.375rem;
`;

const Key = styled(Squircle)<{ $selected: boolean }>`
  display: grid;
  place-items: center;

  background-color: white;
  border: none;
  color: var(--clr-primary-200);
  font-size: var(--fs-300);

  text-transform: uppercase;

  ${(props) =>
    props.$selected &&
    css`
      opacity: 0.25;
    `}
`;
