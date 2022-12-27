import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.border};
    `}

    padding: 1rem;
    margin: 1rem;
`;

export const Title = styled.h2`

`;

export const PlayButton = styled.button`

`;