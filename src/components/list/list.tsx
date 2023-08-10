import React, {useState} from "react";
import {Results} from "./domain/pokemon.interface";
import {Container, Item, PokemonList, Wrapper} from "./styled";
import {Card} from "../card";

export const List = ({results}: { results: Results[] }) => {

    const [openCardId, setOpenCardId] = useState('');

    return (
        <Wrapper>
            <PokemonList>
                {results && results.map(el => (
                    <Container key={el.name}
                         onClick={() => setOpenCardId(el.url.replace("https://pokeapi.co/api/v2/pokemon", ""))}>
                        <Item>
                            {el.name}
                        </Item>
                        {openCardId == el.url.replace("https://pokeapi.co/api/v2/pokemon", "") &&
                            <Card name={el.name} id={el.url.replace("https://pokeapi.co/api/v2/pokemon", "")}/>
                        }
                    </Container>
                ))}
            </PokemonList>
        </Wrapper>
    );
}
