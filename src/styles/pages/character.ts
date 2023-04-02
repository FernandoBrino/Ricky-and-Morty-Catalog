import styled from "styled-components";

interface IProps {
    status: string;
}

export const CharacterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 18rem;
    margin-top: 5rem;

    @media(max-width: 1280px) {
        flex-direction: column;
    }
`

export const Connector = styled.div<IProps>`
    --bg-border: ${({ status, theme }) =>
        status === 'Alive' ? theme.green300 : 
        status === 'Dead' ? theme.red300 :
        theme.white
      };

    width: 100%;
    background-color: var(--bg-border);
    height: 0.2rem;
    position: relative;
    top: 23rem;
    left: 15.5rem;

    &::after {
        content: "";
        position: absolute;
        top: -0.4rem;
        right: -1.3rem;
        width: 1rem;
        height: 1rem;
        background-color: var(--bg-border);
        border-radius: 20px; 
    }

    @media(max-width: 1366px) {
        top: 20rem;
    }

    @media(max-width: 1280px) {
        left: 0;
        top: 31rem;
        transform: rotate(90deg);
    }
`

export const CharacterImage = styled.div<IProps>`
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

    @media(max-width: 1760px) {
        top: 5rem;
        left: -15rem;
    }

    @media(max-width: 1366px) {
        width: 30.5rem;
        height: 30.5rem;

        img {
            width: 30rem;
            height: 30rem;
        }
    }

    @media(max-width: 1280px) {
        top: 0;
        left: 0;
    }
`

export const CharacterDescription = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    color: ${({theme}) => theme.white};
    background-color: ${({ theme }) => theme.gray700};
    box-shadow: 0px 5px 10px 0px ${({ status, theme }) => 
        status === 'Alive' ? theme.greenAlpha300 : 
        status === 'Dead' ? theme.redAlpha700 :
        theme.whiteAlpha700
    };

    padding: 2rem;
    border-radius: 20px;
    min-width: 80%;
    max-height: 40rem;

    position: relative;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px ${({theme}) => theme.white};
        background-color: ${({theme}) => theme.white};
        border: 1px solid ${({theme}) => theme.white};
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.white};
        transition: color .2s linear;
    }

    a:hover {
        color: ${({ theme }) => theme.yellow700};
    }

    .titleCharacter {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .subtitle {
        color: ${({ theme }) => theme["subtitle-color"]};
        font-size: 1rem;
    }

    .favorite {
        position: absolute;
        right: 2.5rem;
        top: 2rem;

        cursor: pointer;
    }

    @media(max-width: 1760px) {
        min-width: 60%;
    }
`

