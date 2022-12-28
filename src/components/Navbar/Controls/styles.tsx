import styled, { css } from "styled-components";

interface Props {
  collapsed: boolean;
}

export const Container = styled.div<Props>`
  ${({ theme, collapsed }) => css`
    background-color: ${theme.colors.primary};

    @media (max-width: 768px) {
      top: ${collapsed ? "0" : "10rem"};
    }
  `}

  display: flex;
  justify-content: center;
  transition-property: top, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    left: 0;
    z-index: -1;
    height: 10rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  width: 20rem;
`;

export const Title = styled.h2`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
`;

interface SliderProps {
  percentage: number;
}

export const Slider = styled.input<SliderProps>`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;

  ${({ theme }) => css`
    accent-color: ${theme.colors.text};
  `}

  &:focus {
    outline: none;
  }

  ${({ theme, percentage }) => css`
    background: linear-gradient(
      to right,
      ${theme.colors.text} ${percentage}%,
      transparent ${percentage}%
    );
  `}
  border-radius: 1rem;
  margin: 0.25rem;

  &::-webkit-slider-thumb {
    ${({ theme, percentage }) => css`
      border: 1px solid ${theme.colors.text};
      background: ${theme.colors.text};
      margin-left: ${percentage / 100 - 0.5}rem;
    `}

    -webkit-appearance: none;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 2rem;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    ${({ theme, percentage }) => css`
      border: 1px solid ${theme.colors.text};
      background: ${theme.colors.text};
      transform: translateX(${percentage / 100 - 0.5}rem);
    `}

    height: 1.5rem;
    width: 1.5rem;
    border-radius: 2rem;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    ${({ theme }) => css`
      border: 1px solid ${theme.colors.text};
    `}
    border-radius: 1rem;
    height: 100%;
  }

  &::-moz-range-track {
    ${({ theme }) => css`
      border: 1px solid ${theme.colors.text};
    `}
    border-radius: 1rem;
    height: 100%;
  }

  &:focus::-webkit-slider-runnable-track {
    ${({ theme }) => css`
      box-shadow: 0 0 1rem ${theme.colors.text};
    `}
  }

  &:focus::-moz-range-track {
    ${({ theme }) => css`
      box-shadow: 0 0 1rem ${theme.colors.text};
    `}
  }
`;
