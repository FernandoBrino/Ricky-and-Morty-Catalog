import styled from "styled-components";

interface IProps {
    isActive?: boolean;
    selectIsActive?: boolean;
}

export const DropdownFilterContainer = styled.div<IProps>`
    display: ${({isActive}) => isActive ? "block" : "none"};
    position: absolute;
    z-index: 100;
    top: 4.5rem;
    left: 4.3rem;
    background-color: ${({theme}) => theme.gray400};
    border-radius: 6px;
    padding: 2rem;

    .wrapperFilters {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .filterActions {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .filterValuesWrapper {
            display: flex;
            flex-direction: column;
            gap: 0.7rem;

            span {
                color: ${({ theme }) => theme.whiteAlpha700};
                font-size: 1.5rem;
            }
        }
    } 
`

export const DefaultButton = styled.button`
    cursor: pointer;
    padding: 0.7rem 1rem;
    border-radius: 6px;
    font-weight: bold;
    margin-top: 0.6rem;
    border: none;
    transition: background-color 0.3s linear;
    flex: 1;

    background-color: ${({theme}) => theme.gray700};
    color: ${({theme}) => theme.white};


    &:hover {
        background-color: ${({theme}) => theme.green300};
    }
`


export const ResetButton = styled(DefaultButton)`
    cursor: pointer;
    padding: 0.6rem 1rem;
    margin-top: 0.6rem;
    border: none;
    transition: background-color 0.3s linear;
    flex: 0;

    background-color: ${({theme}) => theme.gray700};

    &:hover {
        background-color: ${({theme}) => theme.red700};
    }
`

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0 auto;
    width: 20rem;
    cursor: pointer;
`

export const SelectHeader = styled.div<IProps>`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.gray700};
    width: 100%;
    border-radius: 8px;
    color:  ${({theme}) => theme.white};

    svg {
        transform: ${({selectIsActive}) => selectIsActive ? "rotate(180deg)" : "rotate(0deg)"}
    }
`


export const SelectListContainer = styled.div`
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.gray700};
    border-radius: 8px;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        li {
            cursor: pointer;
            padding: 0.6rem 1rem;
            width: 100%;
            color: ${({theme}) => theme.white};

            &:first-child {
                border-radius: 8px 8px 0 0;
            }

            &:last-child {
                border-radius: 0 0 8px 8px;
            }
        }

        li:hover {
            background-color: ${({theme}) => theme["subtitle-color"]};
        }
    }
`