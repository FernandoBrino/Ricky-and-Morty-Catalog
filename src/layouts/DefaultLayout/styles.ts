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
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 15rem 0;
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
    background-color: ${({ theme }) => theme.green};
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
  position: absolute;
  bottom: 0;

  width: 100%;
`;

export const SearchInput = styled.div`
  display: flex;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.gray300};
  padding: 1.5rem;
  width: 60%;
  box-shadow: rgba(34, 177, 76, 0.4) 0px 5px, rgba(34, 177, 76, 0.3) 0px 10px,
    rgba(34, 177, 76, 0.2) 0px 15px, rgba(34, 177, 76, 0.1) 0px 20px,
    rgba(34, 177, 76, 0.05) 0px 25px;

  input {
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.gray300};
    flex: 1;
    font-size: 2rem;
  }
`;
