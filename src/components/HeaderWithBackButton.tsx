import styled from "styled-components";
import { CircleButton } from "./CircleButton";
import IconBack from "../assets/images/icon-back.svg?react";
import { useNavigate } from "react-router-dom";

export const HeaderWithBackButton: React.FC<{ heading: string }> = ({
  heading,
}) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <BackButtonWrapper>
        <CircleButton
          onClick={() => navigate("/")}
          icon={<IconBack />}
        />
      </BackButtonWrapper>

      <Heading $text={heading}>{heading}</Heading>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;

  @media only screen and (min-width: 48em) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BackButtonWrapper = styled.div``;

const Heading = styled.h2<{ $text: string }>`
  position: relative;

  font-size: var(--fs-500);
  text-align: end;
  line-height: 1.2;
  letter-spacing: 1.5px;

  background: var(--gradient-2);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before {
    content: "${(props) => props.$text}";
    -webkit-text-stroke: 0.75rem var(--clr-neutral-200);
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
  }

  @media only screen and (min-width: 48em) {
    white-space: nowrap;
  }
`;
