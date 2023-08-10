import {ReactElement, memo} from "react";
import {Container, PaginationItem, Wrapper} from "./styled";
import {Button} from "../../styled";

interface PaginationProps {
    pageCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination = memo(function Pagination({onPageChange, currentPage, pageCount}: PaginationProps) {
    const handleClick = (page: number) => {
        onPageChange(page)
    }

    const renderPages = () => {
        const pages: number[] = [];
        createPages(pages, pageCount, currentPage);
        return pages;
    }

    return (
        <Wrapper>
            <Container>{
                renderPages().map((i) => (
                    <PaginationItem key={i} className={i === currentPage ? 'active' : ''}>
                        <Button onClick={() => handleClick(i)}>{i}</Button>
                    </PaginationItem>
                ))
            }</Container>
        </Wrapper>
    )
});


// Расчёт для отображения
export function createPages(pages: number[], pagesCount: number, currentPage: number) {
    if (pagesCount > 10) {
        if (currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                pages.push(i)
                if (i == pagesCount) break
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if (i == pagesCount) break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}

