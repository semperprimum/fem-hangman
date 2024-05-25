import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import { IData } from "../types";
import jsonData from "../data.json";
import { isGameWon } from "../utils/gameUtils";

const data: IData = jsonData;

interface GameState {
  categories: [
    "Movies",
    "TV Shows",
    "Countries",
    "Capital Cities",
    "Animals",
    "Sports",
  ];
  selectedCategory: string | null;
  selectedWord: string | null;
  guessedLetters: string[];
  lives: number;
  gameOver: boolean;
  pickCategory: (payload: string) => void;
  guessLetter: (payload: string) => void;
}

enum GameActionKind {
  PICK_CATEGORY = "PICK_CATEGORY",
  GUESS_LETTER = "GUESS_LETTER",
}

interface GameAction {
  type: GameActionKind;
  payload: string;
}

const initialState: GameState = {
  categories: [
    "Movies",
    "TV Shows",
    "Countries",
    "Capital Cities",
    "Animals",
    "Sports",
  ],
  selectedCategory: null,
  selectedWord: null,
  guessedLetters: [],
  lives: 8,
  gameOver: false,
  pickCategory: () => {},
  guessLetter: () => {},
};

const reducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case GameActionKind.PICK_CATEGORY:
      const selectedCategory = action.payload;
      const categoryData = data.categories[selectedCategory];
      const selectedWord =
        categoryData[
          Math.floor(Math.random() * categoryData.length)
        ].name.toLowerCase();
      return {
        ...state,
        selectedCategory,
        selectedWord,
        guessedLetters: [],
        lives: 8,
        gameOver: false,
      };

    case GameActionKind.GUESS_LETTER:
      const guessedLetter = action.payload;
      const { selectedWord: currentWord, guessedLetters, lives } = state;

      if (guessedLetters.includes(guessedLetter) || state.gameOver)
        return state;

      const newGuessedLetters = [...guessedLetters, guessedLetter];
      const isLetterInWord = currentWord?.includes(guessedLetter);

      let newLives = lives;
      if (!isLetterInWord) {
        newLives--;
      }

      let gameOver = newLives === 0 || !currentWord;

      if (currentWord && isGameWon(currentWord, newGuessedLetters)) {
        gameOver = true;
      }

      return {
        ...state,
        guessedLetters: newGuessedLetters,
        lives: newLives,
        gameOver,
      };
    default:
      return state;
  }
};

const GameContext = createContext<GameState>(initialState);

const GameProvider: React.FC<PropsWithChildren> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const pickCategory = (payload: string) => {
    dispatch({ type: GameActionKind.PICK_CATEGORY, payload });
  };

  const guessLetter = (payload: string) => {
    dispatch({ type: GameActionKind.GUESS_LETTER, payload });
  };

  return (
    <GameContext.Provider value={{ ...state, pickCategory, guessLetter }}>
      {props.children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  return useContext(GameContext);
};

export default GameProvider;
