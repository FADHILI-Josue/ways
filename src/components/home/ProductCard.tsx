import { FC } from 'react'
import { Iproduct } from '../../lib/constants'

interface ProductCardProps extends Iproduct {}

const ProductCard: FC<ProductCardProps> = ({name, image, price}) => {
  return <div className='w-full flex flex-col'>
    <img src={image} alt={name+' image'} className='w-full' />
     <h5 className='text-black font-bold text-lg'>{name}</h5>
     <p>$ {price} USD</p>
  </div>
}

export default ProductCard