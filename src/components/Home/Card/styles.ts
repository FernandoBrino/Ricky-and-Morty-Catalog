import Link from "next/link";
import styled from "styled-components";

export const CardContainer = styled(Link)`
  text-decoration: none;
  width: 250px;
  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  position: relative;

  img {
    display: flex;
    flex: 1;
    border-radius: 10px 10px 0 0;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.2rem 1.5rem 2rem 1.5rem;
  background-color: ${({ theme }) => theme.gray400};
  border-radius: 0 0 10px 10px;

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      font-size: 1rem;
    }

    &::before {
      content: "";
      display: flex;
      width: 1rem;
      height: 1rem;
      border-radius: 20px;
      background-color: ${({ theme }) => theme.green};
    }
  }

  .subtitle {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme["subtitle-color"]};
    font-size: 1rem;
  }
`;
