import styled, { css } from "styled-components";
import { Reset, GlobalStyle } from "./components";
import { AppRoutes } from "./router/AppRoutes";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isRoot: boolean = location.pathname === "/";

  return (
    <AppWrapper $isRoot={isRoot}>
      <Reset />

      <GlobalStyle />

      <h1 className="sr-only">The Hangman Game</h1>

      <AppRoutes />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.main<{ $isRoot: boolean }>`
  min-height: 100vh;
  width: min(calc(100% - 3.25rem), 42.5rem);
  margin-inline: auto;

  @media only screen and (min-width: 90em) {
    width: 76rem;
  }

  ${(props) =>
    !props.$isRoot &&
    css`
      &::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: var(--gradient-3);
        opacity: 0.75;
        z-index: -50;
      }
    `}
`;
