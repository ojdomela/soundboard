import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.text};
    `}

    padding: 2rem;
    margin: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    font-size: 2rem;
    margin: 1rem;
`;

export const PlayButton = styled.button`
    ${({ theme }) => css`
        background-color: ${theme.colors.text};
        color: ${theme.colors.primary};
    `}
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
`;