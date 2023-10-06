import { FC, useState } from 'react'
import {  Link, useParams } from 'react-router-dom';
import { Iproduct, products } from '../lib/constants';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';
import { BsUpload } from 'react-icons/bs'

interface ProductProps {

}

const Product: FC<ProductProps> = () => {
    const { id } = useParams()
    // const id = query.get('id')
    const [activeSize, setActiveSize] = useState<number>(0)
    const [count, setCount] = useState<number>(0)


    let filteredProducts: Iproduct[] = []

    if (id) {
        console.log(id)
        filteredProducts = products.filter(product => products.indexOf(product) !== parseInt(id)) as Iproduct[];
        filteredProducts.length = 3
    } else {
        filteredProducts = [];
    }

    return <div className='w-full flex flex-col'>
        <div className="w-full flex justify-between mt-14 ml-8">
            <div className="w-full flex px-20 justify-center flex-[1]">
                <img src={id && products[parseInt(id)].image} alt="" className=' h-full border px-10' />
            </div>
            <div className="flex-[1] flex flex-col">
                <p className='mb-5'>Ariel Wayz</p>
                <h1 className='font-extrabold text-3xl'>{id && products[parseInt(id)].name}</h1>
                <p className='text-2xl font-semibold mt-2'>$ {id && products[parseInt(id)].price.toFixed(2)} USD</p>
                <div className="my-5">
                    <span className=''>Size</span>
                    <div className="flex items-center gap-3 mt-2">
                        {['Small', 'Medium', 'Large', 'XLarge', '2X'].map((e, i) => <Button key={i} onClick={() => setActiveSize(i)} className={cn('bg-white text-black rounded-full border border-black hover:text-white hover:bg-black', activeSize === i && 'bg-black text-white')}>{e}</Button>)}
                    </div>
                </div>
                <div className="my-5">
                    <span className=''>Quantity</span>
                    <div className="border flex items-center gap-4 text-2xl font-bold mt-3 border-stone-400 px-4 py-1 w-fit">
                        <button onClick={() => count > 0 && setCount((prev) => prev - 1)} className='cursor-pointer'>-</button><span>{count}</span><button onClick={() => setCount((prev) => prev + 1)} className='cursor-pointer'>+</button>
                    </div>
                </div>
                <Button className='rounded-none bg-black text-white w-fit font-extrabold py-6 px-20'>Add to cart</Button>
                <p className='my-4 max-w-md'>The ‘Ariel Wayz Scribble Hoodie’ features a color pattern illustration surrounded by the letters of Ariel Wayz’s name on the front. Printed on a unisex white hoodie.</p>
                <i className='my-4 max-w-md'>Depiction of this product is a digital rendering for illustrative purposes only. Actual product detailing may vary. We will not be able to issue refunds of exchange for size. For this item you will not receive a ship confirmation email nor tracking. Please be assured that your order will ship to arrive in 4-7 business days. This product is made on demand and not returnable.</i>
                <p className='font-bold text-xl flex items-center gap-2'>
                    <BsUpload size={20} title="share" />
                    <span>share</span>
                </p>
            </div>
        </div>
        <div className="my-20 px-28 w-full flex flex-col">
            <h1 className='font-bold text-lg mb-10'>You may also like</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    filteredProducts.map((e, i) => <ProductCard id={products.indexOf(e)} key={i} image={e.image} name={e.name} price={e.price} />)
                }
            </div>
        </div>
    </div>
}

export default Product



interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    id: number
  }


const ProductCard: FC<ProductCardProps> = ({ name, image, price, id }) => {
    return <Link replace={true} to={'/product/'+id} className='w-fll h-80 flex flex-col'>
      <img src={image} alt={name + ' image'} className='w-full h-full border border-stone-500' />
      <h5 className='text-black font-bold text-lg'>{name}</h5>
      <p>$ {price.toFixed(2)} USD</p>
    </Link>
  }
  