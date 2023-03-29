import styled from "styled-components";

export const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 > span {
    color: ${({ theme }) => theme.yellow};
  }
`;
