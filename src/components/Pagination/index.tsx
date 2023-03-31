import { FC } from "react";
import { PaginationContainer } from "./styles";

interface PaginationProps {
    totalCharacters: number | undefined;
    charactersPerPage: number
    handleChangeCurrentPage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ totalCharacters, charactersPerPage, handleChangeCurrentPage }) => {
    if(totalCharacters == undefined) {
        totalCharacters = 0;
    }

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalCharacters/charactersPerPage); i++) {
        const newPage = {
            id: i * 10,
            number: i
        }
        pages.push(newPage);
    }

    pages = pages.slice(0, 9);

    return (
        <PaginationContainer>
            {
                pages.map((page) => 
                    <button key={page.id} onClick={() => handleChangeCurrentPage(page.number)} >{page.number}</button>
                )
            }
            <span>...</span>
        </PaginationContainer>
    )
}