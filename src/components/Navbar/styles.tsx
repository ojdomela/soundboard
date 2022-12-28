import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
  `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  height: 10rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

interface Props {
  toggled: boolean;
}

export const Button = styled.button<Props>`
  ${({ theme, toggled }) => css`
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.text};
    background-color: ${theme.colors.primary};
    &:after {
      background: linear-gradient(
        to right,
        ${theme.colors.text} 50%,
        transparent 50%
      );
      transform: translateX(${toggled ? "-10%" : "-35%"});
    }
  `}

  width: 4rem;
  height: 2rem;
  border-radius: 2rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    transition: transform 0.2s ease-in-out;
    z-index: 2;
  }
`;

export const Indicator = styled.div<Props>`
  ${({ theme, toggled }) => css`
    background-color: ${theme.colors.text};
    border: 1px solid ${theme.colors.text};
    color: ${theme.colors.primary};
    transform: translateX(${toggled ? "100%" : "0"});
  `}

  width: 50%;
  height: 100%;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;
  position: relative;
  z-index: 3;
`;
