import { FC } from "react";
import { PaginationContainer } from "./styles";

interface PaginationProps {
    totalCharacters: number | undefined;
    charactersPerPage: number
    handleChangeCurrentPage: (page: number) => void;
    currentPage: number
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, index) => from + index + 1)
}

export const Pagination: FC<PaginationProps> = ({ totalCharacters, charactersPerPage, currentPage, handleChangeCurrentPage }) => {
    if(totalCharacters === undefined) {
        return null;
    }

    const lastPage = Math.floor(totalCharacters / charactersPerPage)

    const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

      const nextPages =
        currentPage < lastPage
        ? generatePagesArray(
            currentPage,
            Math.min(currentPage + siblingsCount, lastPage),
            )
        : []
  

    return (
        <PaginationContainer>
            {currentPage > siblingsCount + 1 && (
            <>
                <li>
                <button type="button" onClick={() => handleChangeCurrentPage(1)}>
                    1
                </button>
                </li>

                {currentPage > 2 + siblingsCount && (
                <li>
                    <span>...</span>
                </li>
                )}
            </>
            )}

            {previousPages.length
            ? previousPages.map((page) => (
                <li key={page}>
                    <button type="button" onClick={() => handleChangeCurrentPage(page)}>
                    {page}
                    </button>
                </li>
                ))
            : ''}

            <li>
            <button
                type="button"
                onClick={() => handleChangeCurrentPage(currentPage)}
                className="isActive"
            >
                {currentPage}
            </button>
            </li>

            {nextPages.length
            ? nextPages.map((page) => (
                <li key={page}>
                    <button type="button" onClick={() => handleChangeCurrentPage(page)}>
                    {page}
                    </button>
                </li>
                ))
            : ''}

            {currentPage + siblingsCount < lastPage && (
            <>
                {currentPage + 1 + siblingsCount < lastPage && (
                    <li>
                        <span>...</span>
                    </li>
                    )}

                    <li>
                    <button type="button" onClick={() => handleChangeCurrentPage(lastPage)}>
                        {lastPage}
                    </button>
                </li>
            </>
            )}
        </PaginationContainer> 
    )
}