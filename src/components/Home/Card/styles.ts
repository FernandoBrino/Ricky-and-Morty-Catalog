import Link from "next/link";
import styled from "styled-components";

export const CardContainer = styled(Link)`
  text-decoration: none;
  width: 250px;
  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  position: relative;
  box-shadow: 0px 5px 10px 0px rgba(34, 177, 76, 0.5);
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
    /* box-shadow:  0px 5px, rgba(34, 177, 76, 0.3) 0px 10px,
    rgba(34, 177, 76, 0.2) 0px 15px, rgba(34, 177, 76, 0.1) 0px 20px,
    rgba(34, 177, 76, 0.05) 0px 25px; */

    transform: translateY(-5px);
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
  }
`;

export const Description = styled.div`
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
      background-color: ${({ theme }) => theme.green};
    }
  }

  .subtitle {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme["subtitle-color"]};
    font-size: 1rem;
  }
`;
