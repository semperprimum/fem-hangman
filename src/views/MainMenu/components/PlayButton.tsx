import styled from "styled-components";
import PlayIcon from "../../../assets/images/icon-play.svg?react";
import React from "react";
import { LinkProps } from "react-router-dom";

interface PlayButtonProps {
  as?: React.ElementType<LinkProps>;
  to?: string;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ ...props }) => {
  return (
    <PlayButtonContainer {...props}>
      <PlayIconContainer>
        <PlayIcon />
      </PlayIconContainer>
    </PlayButtonContainer>
  );
};

const PlayButtonContainer = styled.button`
  background-image: var(--gradient-1);
  border: none;
  border-radius: 100vmax;
  aspect-ratio: 1;
  padding: 3.375rem;
  width: 10rem;
  aspect-ratio: 1;

  display: block;
  margin-inline: auto;

  box-shadow: inset 0 -4px 0 5px #243041, inset 0 -12px 0 11px #9d2df5;

  transition: scale 75ms ease;

  &:active {
    scale: 0.9;
  }

  @media only screen and (min-width: 90em) {
  transition: scale 75ms ease
              filter 150ms ease;

    &:hover {
      filter: brightness(1.25);
    }
  }
`;

const PlayIconContainer = styled.div`
  svg {
    display: block;
    max-width: 3.375rem;
    height: 100%;
  }
`;
