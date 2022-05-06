import styled from 'styled-components';

export const StyledCardContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.palette.border.main};
    border-radius: .5rem;

    & > figure {
      max-height: 13.75rem;
      overflow: hidden;
      border-top-left-radius: .5rem;
      border-top-right-radius: .5rem;
      position: relative;

      & > img {
        width: 100%;
      }
    }

    & > p {
      font-size: 1rem;
      line-height: 1.5;
      padding: 1rem .75rem;
      color: ${({ theme }) => theme.palette.text.main};
    }
`;

export const StyledCardTitle = styled.figcaption`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.palette.background.light};
  opacity: 0.7;
  width: 100%;

  & > h3 {
    color: ${({ theme }) => theme.palette.tertiary.light};
    padding: .75rem;
    font-size: 1.25rem;
  }
`

