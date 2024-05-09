import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { useGame } from "../context/GameContext";
import { useNavigate } from "react-router-dom";

interface PauseModalProps {
  isOpen: boolean;
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PauseModal: React.FC<PauseModalProps> = ({
  isOpen,
  title,
  setIsOpen,
}) => {
  const dialog = useRef<HTMLDialogElement>(null);

  const navigate = useNavigate();

  const { gameOver, pickCategory, selectedCategory } = useGame();

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [isOpen]);

  const restartGame = () => {
    if (selectedCategory) {
      pickCategory(selectedCategory);
    }

    setIsOpen(false);
  };

  return (
    <Dialog ref={dialog}>
      <Title $text={title}>{title}</Title>

      {gameOver ? (
        <Button onClick={() => restartGame()}>Play again!</Button>
      ) : (
        <Button onClick={() => setIsOpen(false)}>Continue</Button>
      )}

      <Button onClick={() => navigate("/categories")}>New Category</Button>
      <Button
        $secondary
        onClick={() => navigate("/")}
      >
        Quit Game
      </Button>
    </Dialog>
  );
};

const Dialog = styled.dialog`
  border: none;
  position: relative;
  padding: 6.5rem 1.625rem 5.5rem;
  overflow: visible;

  display: grid;
  justify-items: center;
  gap: 2.125rem;

  animation: appear 300ms ease forwards;

  background: linear-gradient(#344aba, #001479d4);
  border-radius: 3rem;
  box-shadow: inset 0 -8px 0 4px #140e66, inset 0 6px 0 8px #2463ff;

  width: calc(100% - 3.25rem);

  &::backdrop {
    background: var(--gradient-3);
    opacity: 0.75;
  }

  @keyframes appear {
    from {
      opacity: 0;
      scale: 0;
    }

    to {
      opacity: 1;
      scale: 1;
    }
  }
`;

const Title = styled.h3<{ $text: string }>`
  font-size: 5.5rem;
  position: absolute;
  line-height: 1;
  top: -2.75rem;
  left: 50%;
  translate: -50%;
  transform-style: preserve-3d;

  background: var(--gradient-2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before {
    content: "${(props) => props.$text}";
    -webkit-text-stroke: 0.75rem var(--clr-neutral-200);
    position: absolute;
    left: 0;
    top: 0;
    transform: translateZ(-1px);
  }
`;
