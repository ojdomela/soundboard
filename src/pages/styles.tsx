import styled, { css } from "styled-components";

export const Main = styled.main`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`

`;

export const Button = styled.button`

`;

export const Container = styled.ul`
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.border};
    `}

    border-radius: 1rem;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    margin: 1rem;
`;
