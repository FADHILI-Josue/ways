import { product } from "../assets"

interface navLink {
    route: string,
    name: string
}

export interface Iproduct {
   name: string,
   image: string,
   price: number,
}
export const navLinks:navLink[] = [
 {
    route: '/',
    name: 'Store',
 },
 {
    route: '/apparel',
    name: 'Apparel',
 },
 {
    route: '/music',
    name: 'Music',
 },
 {
    route: '/contact',
    name: 'Contact',
 },

]


export const products:Iproduct[] = [
   {name: 'Ariel Scribble Hoddie', image: product, price: 65.00},
   {name: 'Ariel Scribble Hoddie', image: product, price: 65.00},
   {name: 'Ariel Scribble Hoddie', image: product, price: 65.00},
   {name: 'Ariel Scribble Hoddie', image: product, price: 65.00},
   {name: 'Ariel Scribble Hoddie', image: product, price: 65.00},
   {name: 'Ariel Scribble Hoddie', image: product, price: 65.00},
]

