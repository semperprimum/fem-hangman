import styled from "styled-components";
import { HeaderWithBackButton } from "../../components";
import { CategoryButton } from "./components/CategoryButton";
import { Squircle } from "corner-smoothing";
import { useNavigate } from "react-router-dom";
import { useGame } from "../../context/GameContext";

const categories = [
  "Movies",
  "TV Shows",
  "Countries",
  "Capital Cities",
  "Animals",
  "Sports",
];

export const CategoryPick = () => {
  const navigate = useNavigate();

  const { pickCategory } = useGame();

  return (
    <div>
      <HeaderWithBackButton heading="Pick a Category" />

      <Container>
        {categories.map((category) => (
          <CategoryButton
            cornerRadius={20}
            cornerSmoothing={1}
            as={Squircle}
            key={category}
            onClick={() => {
              pickCategory(category);
              navigate("/play");
            }}
          >
            {category}
          </CategoryButton>
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 6.25rem;

  @media only screen and (min-width: 48em) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 11.375rem);
    gap: 2rem;
  }

  @media only screen and (min-width: 90em) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 11.875rem);

    row-gap: 3.125rem;
  }
`;
