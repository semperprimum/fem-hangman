import styled from "styled-components";
import { useGame } from "../../../context/GameContext";

export const LetterBoard = () => {
  const { selectedWord, guessedLetters } = useGame();

  return (
    <BoardContainer>
      {selectedWord?.split(" ").map((word) => (
        <Word key={word}>
          {word.split("").map((letter, index) => (
            <Letter key={index}>
              {guessedLetters.includes(letter) && letter}
            </Letter>
          ))}
        </Word>
      ))}
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  margin-top: 4.875rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  row-gap: 0.75rem;
  column-gap: 3.5rem;
`;

const Word = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

const Letter = styled.span`
  display: grid;
  place-items: center;

  background-color: var(--clr-primary-100);
  font-size: var(--fs-400);
  text-transform: uppercase;

  width: 2.5rem;
  height: 4.125rem;
  border-radius: 0.75rem;

  box-shadow: inset 0 -2px 0 3px #140e66, inset 0 1px 0 6px #3c74ff;

  &:empty {
    opacity: 0.25;
  }
`;
