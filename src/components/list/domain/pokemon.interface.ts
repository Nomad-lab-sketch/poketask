export interface Berry {
    count: number;
    next: string;
    results: Results[]
}

export interface Results {
    name: string;
    url: string;
}