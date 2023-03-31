import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    li {
      width: 3.2rem;
      height: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    

      button,
      span {
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.white};
        border-radius: 6px;
        font-weight: bold;
      }

      button {
        cursor: pointer;
        padding: 0.7rem 1rem;
        border-radius: 6px;
        border: 2px solid transparent;
        transition: background-color 0.2s, border-color 0.2s linear;
        font-weight: bold;

        font-size: 1rem;
        color: ${({theme}) => theme.gray700};

        &:hover {
            border: 2px solid ${({theme}) => theme.green300}
        }
      }
    }
`