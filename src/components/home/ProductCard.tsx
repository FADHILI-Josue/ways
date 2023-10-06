import { FC } from 'react'

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

const ProductCard: FC<ProductCardProps> = ({ name, image, price }) => {
  return <div className='w-full flex flex-col'>
    <img src={image} alt={name + ' image'} className='w-full  md:max-h-80' />
    <h5 className='text-black font-bold text-lg hover:underline'>{name}</h5>
    <p>$ {price.toFixed(2)} USD</p>
  </div>
}

export default ProductCard