import {List} from "../../components/list";
import {Pagination} from "../../components/pagination";
import {Container, Wrapper} from "./styled";
import useSWR from "swr";
import {environment, get} from "../../utils/fetcher";
import {Berry} from "../../components/list/domain/pokemon.interface";
import React, {useCallback, useState} from "react";

export const HomePage = () => {

    // Количество элементов на одной странице
    const PER_PAGE = 20;

    // Query параметры
    const [queryParams, setQueryParams] = useState(`?limit=${PER_PAGE}`);

    // Список покемонов
    const {data, error, isLoading} = useSWR({url: environment.endpoints.pokemon, query: queryParams}, get<Berry>);

    // Выбранная страница
    const [currentPage, setCurrentPage] = useState(1);


    const onPageChange = useCallback((page: number) => {
        setCurrentPage(page)
        setQueryParams(`?limit=${PER_PAGE}&offset=${page}`)
    }, [])

    return (
        <Wrapper>
            <Container>
                {data && (<>
                    <List results={data.results}/>
                    <Pagination pageCount={Math.ceil(data.count / PER_PAGE)} onPageChange={onPageChange} currentPage={currentPage}/>
                </>)}
            </Container>
        </Wrapper>
    );
};
