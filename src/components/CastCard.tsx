import styled from "@emotion/styled";

type Props = {
  actor: string;
  character: string;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #202020;
  padding: 2.4rem;
  align-items: center;
  flex-shrink: 0;
`;

const StyledTitle = styled.p`
  font-size: 1.8rem;
`;

const StyledDescription = styled.span`
  font-size: 1.4rem;
  opacity: 0.5;
`;

export default function CastCard({ actor, character }: Props) {
  return (
    <StyledContainer>
      <StyledTitle>{character}</StyledTitle>
      <StyledDescription>{actor}</StyledDescription>
    </StyledContainer>
  );
}
