import { FC } from 'react'
import ProductCard from '../components/home/ProductCard'
import { concert } from '../assets'
import { Link } from 'react-router-dom'
import { useData } from '../contexts/DataProvider'


const HomePage: FC = () => {
  
  const {products} = useData() 

  return <div className='w-full flex flex-col px-7 sm:px-32 pt-10 items-center bg-white'>
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {products?.map((e, i) => <Link key={i} to={'/product/'+e.id} className='w-full'><ProductCard name={e.name} image={e.image} price={e.price} /></Link>)}
    </div>
    <div className="w-full grid gap-20 mt-32 mb-10 grid-cols-1 md:grid-cols-2">
      {([
        { title: 'Ariel Ways Good Luck (feat Mike Kayihura) Limited Edition Single CD', image: concert, price: 3 },
        { title: 'Ariel Wayz Home Away( feat Juno Kizigenda) Digital Download ', image: concert, price: 3 },
      ] as const).map((e, i) => <div key={i} className='flex flex-col w-full'>
        <img src={e.image} alt={e.title + ' image'} className='w-full' />
        <h5 className='text-black font-bold text-lg'>{e.title}</h5>
        <p>$ {e.price} USD</p>
      </div>)}
    </div>
  </div>
}

export default HomePage