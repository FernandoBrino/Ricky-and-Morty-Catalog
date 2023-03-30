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
        pages.push(i);
    }

    return (
        <PaginationContainer>
            {
                pages.map((page, index) => 
                    <button key={index} onClick={() => handleChangeCurrentPage(page)} >{page}</button>
                )
            }
        </PaginationContainer>
    )
}