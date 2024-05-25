import styled from "styled-components";

interface ProgressBarProps {
  value: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <ProgressContainer>
      <Progress style={{ width: `${value}%` }} />
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  width: 3.5625rem;
  background-color: white;
  border-radius: 100vmax;
  padding: 0.25rem;

  @media screen and (min-width: 48em) {
    width: 10rem;   	
    padding: .5625rem .6875rem;
  }

  @media only screen and (min-width: 90em) {
    width: 15rem;
  }
`;

const Progress = styled.div`
  height: 0.5rem;
  background-color: var(--clr-primary-200);
  border-radius: 100vmax;

  @media screen and (min-width: 48em) {
    height: .8125rem;   	
  }
`;
