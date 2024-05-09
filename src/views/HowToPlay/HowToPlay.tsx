import styled from "styled-components";
import { HeaderWithBackButton } from "../../components";
import { Card } from "./components/Card";

export const HowToPlay = () => {
  return (
    <Wrapper>
      <HeaderWithBackButton heading="How to Play" />

      <CardContainer>
        <Card
          number="01"
          title="Choose a category"
          body="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
        />
        <Card
          number="02"
          title="Guess letters"
          body="Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."
        />
        <Card
          number="03"
          title="Win or lose"
          body="You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
        />
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media only screen and (max-width: 48em) {
    padding-bottom: 1rem;
  }
`;

const CardContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  gap: 1.5rem;

  @media only screen and (min-width: 90em) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;
