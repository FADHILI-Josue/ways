import { FC } from 'react'
import { products } from '../lib/constants'
import ProductCard from '../components/home/ProductCard'


const HomePage: FC = () => {
  return <div className='w-full flex flex-col px-32 pt-10 items-center bg-white'>
    <div className="w-full grid grid-cols-3 gap-10">
      {products.map((e, i)=><ProductCard key={i} name={e.name} image={e.image} price={e.price} />)}
    </div>
  </div>
}

export default HomePage