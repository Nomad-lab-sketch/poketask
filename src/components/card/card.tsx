import useSWR from "swr";
import {environment, get} from "../../utils/fetcher";
import {Container} from "./styled";
import {CharacteristicInterface} from "./domain/Characteristic.interface";

export const Card = ({id, name}: {id: string, name: string}) => {

    const {data, error, isLoading} = useSWR({url: environment.endpoints.characteristic, query: id}, get<CharacteristicInterface>);

    return (
        <Container>
          <div>Card: {name}</div>
            <div>description:</div>
            <ul>
                {data && data.descriptions.map((desc) => (
                    <li key={desc.language.name}>
                         {desc.description}
                    </li>
                )) }
            </ul>
        </Container>
    )
}