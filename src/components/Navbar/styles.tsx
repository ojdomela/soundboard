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
`;

export const Title = styled.h1`

`;

export const Button = styled.button`

`;
