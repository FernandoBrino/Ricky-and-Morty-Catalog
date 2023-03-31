import Link from "next/link";
import styled from "styled-components";

interface CardProps {
  status: string;
}

export const CardContainer = styled(Link)<CardProps>`
  text-decoration: none;
  width: 250px;
  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  position: relative;
  box-shadow: 0px 5px 10px 0px ${({ status, theme }) => 
    status === 'Alive' ? theme.greenAlpha300 : 
    status === 'Dead' ? theme.redAlpha700 :
    theme.whiteAlpha700
  };

  transition: all ease 0.2s;

  img {
    display: flex;
    flex: 1;
    border-radius: 10px 10px 0 0;
  }

  .favorite {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
`;

export const Description = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.2rem 1.5rem;
  background: linear-gradient(0deg, rgba(60, 62, 68, 1) 0%, rgba(60, 62, 68, 0.8) 50%, rgba(60, 62, 68,0.7) 100%);
  filter: drop-shadow(0 -6mm 3mm rgb(60, 62, 68));
  border-radius: 0 0 10px 10px;
  height: 200px;

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
      background-color: ${({ status, theme }) =>
        status === 'Alive' ? theme.greenAlpha300 : 
        status === 'Dead' ? theme.redAlpha700 :
        theme.whiteAlpha700
      };
    }
  }

  .subtitle {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme["subtitle-color"]};
    font-size: 1rem;
  }

`;
