import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.text};
    box-shadow: 0 0 5rem ${theme.colors.primary};
  `}

  transition-property: box-shadow, border;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  padding: 2rem;
  margin: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin: 1rem;
`;

export const PlayButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.text};
    color: ${theme.colors.primary};
    &:focus {
        box-shadow: 0 0 2rem ${theme.colors.text};
    }
  `}

  &:focus {
    outline: none;
  }
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  transition-property: background-color, color, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
`;
