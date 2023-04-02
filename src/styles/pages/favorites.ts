import styled from "styled-components";

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7rem;
  margin-bottom: 5rem;

  @media(max-width: 1260px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 633px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const SearchInput = styled.div`
  display: flex;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.gray300};
  padding: 1.5rem 2rem 1.5rem 2.5rem;
  width: 70%;
  margin-bottom: 12rem;
  box-shadow: 0px 5px 10px 0px ${({theme}) => theme.greenAlpha300};

  input {
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.gray300};
    flex: 1;
    font-size: 2rem;
    width: 70%;
  }
`;

export const FavoritesNotExist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  h1 {
    color: ${({ theme }) => theme.white}
  }

  img {
    width: 40.5rem;
    height: 40.5rem;
    
    border-radius: 20.1rem;
    border: 3px solid ${({ theme }) => theme.whiteAlpha700};
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
    padding: 0.7rem 1rem;
    border-radius: 6px;
    border: 2px solid ${({theme}) => theme.white};
    transition: background-color 0.2s, border-color 0.2s linear;
    font-weight: bold;
    background-color: ${({theme}) => theme.gray700};

    font-size: 2rem;
    color: ${({theme}) => theme.white};

    &:hover {
        border: 2px solid ${({theme}) => theme.green300}
    }
  }
`

