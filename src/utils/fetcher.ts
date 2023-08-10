import axios from "axios";
import {Path} from "./domain/fetcher.inteface";


const environment = {
    baseUrl: "https://pokeapi.co/api/v2/",
    endpoints: {
        pokemon: "pokemon",
        characteristic: "characteristic"
    }
}

const get = <T>(path: Path) => axios.get<T>(environment.baseUrl + path.url + path.query).then(res => {
    return res.data
})

export {environment, get};
