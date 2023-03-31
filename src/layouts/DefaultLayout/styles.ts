import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.7rem 0 0;
  background-color: ${({ theme }) => theme.gray700};

  > img {
    cursor: pointer;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 15rem 10rem;
  gap: 10rem;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    display: block;
    position: relative;
    padding: 0.2em 0;
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: ${({ theme }) => theme.green300};
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    transform: scale(0);
    transform-origin: center;
  }

  a:hover::after {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
