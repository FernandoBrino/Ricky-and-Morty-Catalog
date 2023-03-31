import styled from "styled-components";

interface CardProps {
    status: string;
  }

export const CharacterContainer = styled.div`
    font-size: 4.6rem;
    color: #fff;
`

export const CharacterImage = styled.div<CardProps>`
    position: relative;
    top: 5rem;
    left: -25rem;

    overflow: hidden;
    justify-content: center;
    align-items: center;

    width: 40.5rem;
    height: 40.5rem;
    padding: 2rem;
    border-radius: 20.1rem;

    @keyframes spin {
        from {transform: translate(-50%, -50%) rotate(0);}
        to   {transform: translate(-50%, -50%) rotate(360deg);}
    }

    --bg-border: ${({ status, theme }) =>
        status === 'Alive' ? theme.green300 : 
        status === 'Dead' ? theme.red300 :
        theme.white
      };
    
    &::before {
        content: '';
        background: conic-gradient(
            var(--bg-border) 0.1666turn, 
            #191919 0.1666turn 0.3333turn, 
            var(--bg-border) 0.3333turn 0.5turn, 
            #191919 0.5turn 0.6666turn, 
            var(--bg-border) 0.6666turn 0.8333turn, 
            #191919 0.8333turn
        );
        width: calc(100% * 1.41421356237);
        padding-bottom: calc(100% * 1.41421356237);
        position: absolute;
        left: 50%;
        top: 50%;
        animation: spin 5s linear infinite;
    }
    
    img {
        border-radius: 100%;
        position: absolute;
        z-index: 1;
        top: 0.3rem;
        left: 0.3rem;
    }
`

