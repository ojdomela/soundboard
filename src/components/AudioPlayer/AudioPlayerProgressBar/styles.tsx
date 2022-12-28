import styled, { css } from "styled-components";

export const Description = styled.p`

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
        background: linear-gradient(to right, ${theme.colors.text} ${percentage}%, transparent ${percentage}%);
    `}
    border-radius: 1rem;
    margin: .25rem;

    &::-webkit-slider-thumb {
        ${({ theme, percentage }) => css`
            border: 1px solid ${theme.colors.text};
            background: ${theme.colors.text};
            box-shadow: 0 0 1.5rem #666;
            margin-left: ${(percentage / 100) - 0.5}rem;
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
            box-shadow: 0 0 1.5rem #666;
            transform: translateX(${(percentage / 100) - 0.5}rem);
        `}

        -webkit-appearance: none;
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

    &:focus::-webkit-slider-runnable-track {
        ${({ theme }) => css`
            // background: ${theme.colors.primary};
        `}
    }

    &::-moz-range-track {
        ${({ theme }) => css`
            border: 1px solid ${theme.colors.text};
        `}
        border-radius: 1rem;
        height: 100%;
    }

    &:focus::-moz-range-track {
        ${({ theme }) => css`
            // background: ${theme.colors.text};
        `}
    }

`;
