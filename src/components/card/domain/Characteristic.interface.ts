export interface CharacteristicInterface {
    id: number;
    descriptions: Description[];
    gene_modulo: number;
    highest_stat: HighestStat
    possible_values: number[];
}

export interface Description {
    description: string;
    language: Language
}

export interface HighestStat {
    name: string;
    url: string
}

export interface Language {
    name: string;
    url: string;
}
