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
`;

const Progress = styled.div`
  height: 0.5rem;
  /* width: 100%; */
  background-color: var(--clr-primary-200);
  border-radius: 100vmax;
`;
