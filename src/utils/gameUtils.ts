export const isGameWon = (
  selectedWord: string,
  guessedLetters: string[]
): boolean => {
  const selectedWordSet: Set<string> = new Set(selectedWord.replace(/\s/g, ""));
  return Array.from(selectedWordSet).every((letter) =>
    guessedLetters.includes(letter)
  );
};
