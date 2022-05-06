import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 1rem;
  width: 100%;

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
  }

  & h2 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const StyledHeader = styled.div`
  margin-bottom: 1rem;
`;