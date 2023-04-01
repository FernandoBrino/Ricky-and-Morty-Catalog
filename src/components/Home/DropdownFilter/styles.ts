import styled from "styled-components";

interface IProps {
    isActive: boolean;
}

export const DropdownFilterContainer = styled.div<IProps>`
    display: ${({isActive}) => isActive ? "block" : "none"};
    position: absolute;
    z-index: 100;
    top: 4.5rem;
    left: 4.3rem;
    height: 20rem;
    background-color: ${({theme}) => theme.gray400};
    border-radius: 6px;
    padding: 2rem;

    form {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;

        span {
            color: ${({ theme }) => theme.whiteAlpha700};
            font-size: 1.5rem;
        }

        ul {
            list-style-type: none;
            display: flex;
            gap: 1rem;
            margin-left: 1.5rem;

        li {
            display: flex;
            gap: 0.5rem;

            label {
                font-size: 1.5rem;
                color: ${({ theme }) => theme.white};
            }

            input[type="checkbox"] {
                cursor: pointer;
            }
        }
    }
    }

    
`