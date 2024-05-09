import { useNavigate } from "react-router-dom";
import { useGame } from "../../context/GameContext";
import { Header } from "./components/Header";
import { Keyboard } from "./components/Keyboard";
import { LetterBoard } from "./components/LetterBoard";
import { useEffect, useState } from "react";
import { PauseModal } from "../../components";

export const Play = () => {
  const { selectedWord, gameOver, lives } = useGame();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("Paused");

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedWord) {
      navigate("/categories");
    }
  }, []);

  const openModal = (title: string) => {
    setIsModalOpen(true);
    setModalTitle(title);
  };

  useEffect(() => {
    if (!gameOver) return;

    if (lives > 0) {
      openModal("You Win");
    } else {
      openModal("You Lose");
    }
  }, [gameOver]);

  return (
    <>
      {isModalOpen && (
        <PauseModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          title={modalTitle}
        />
      )}

      <Header openModal={openModal} />

      <LetterBoard />

      <Keyboard />
    </>
  );
};
