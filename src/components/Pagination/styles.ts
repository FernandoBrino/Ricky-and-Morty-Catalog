import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    max-width: 150rem;
    grid-column: span 4;
    margin-top: 3rem;
    border: none;

    button {
        cursor: pointer;
        padding: 0.7rem 1rem;
        border-radius: 6px;
        border: 2px solid transparent;
        transition: all 0.2s linear;
    }

    button:hover {
        border: 2px solid ${({theme}) => theme.green};
    }
`