export enum Size {
    'Small',
    'Medium',
    'Large',
    'XLarge',
    '2X',
}

export interface Iproduct {
    name: string,
    image: string,
    price: number,
    id: string,
    category: string,
    description: string
}