import styled from "styled-components";

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7rem;
  margin-bottom: 5rem;
`

export const SearchInput = styled.div`
  display: flex;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.gray300};
  padding: 1.5rem 2rem 1.5rem 2.5rem;
  width: 100rem;
  margin-bottom: 12rem;
  box-shadow: 0px 5px 10px 0px ${({theme}) => theme.greenAlpha300};

  input {
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.gray300};
    flex: 1;
    font-size: 2rem;
  }
`;

