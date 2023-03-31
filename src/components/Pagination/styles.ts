import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
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
        border: 2px solid ${({theme}) => theme.green300};
    }

    span {
        padding: 0.7rem 1rem;
        border-radius: 6px;
        border: 2px solid transparent;
        background-color: ${({theme}) => theme.white}
    }
`