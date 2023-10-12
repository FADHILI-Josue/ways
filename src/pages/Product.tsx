import { FC, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';
import { BsUpload } from 'react-icons/bs'
import { Iproduct } from '../lib/types';
import { useData } from '../contexts/DataProvider';

interface ProductProps {

}

const Product: FC<ProductProps> = () => {
    const { products, dispatchCartItems, cartItems } = useData()
    const { id } = useParams()
    const navigate = useNavigate();
    const [product, setProduct] = useState<Iproduct>()
    const [activeSize, setActiveSize] = useState<number>(0)
    const [count, setCount] = useState<number>(0)

    // function to add item to cart
    const handleCart = () => {
        cartItems.includes(product as Iproduct) ?
        dispatchCartItems({ type: 'removeItem', payload: product?.id as string })
        :
        dispatchCartItems({ type: 'addItem', payload: [product!] })
    }

    const filteredProducts = useRef<Iproduct[]>()
    useEffect(() => {

        if (id && products.length) {
            const productItem = products.find((e) => e.id === id)
            if (productItem) {
                setProduct(productItem)
            }
            else {
                return navigate('/notfound')
            }
            filteredProducts.current = products.filter(product => product.id !== id) as Iproduct[];
            filteredProducts.current.length = 3
        } else {
            filteredProducts.current = [];
        }
    }, [id, products])

    return <div className='w-full flex flex-col'>
        <div className="w-full flex flex-col lg:flex-row justify-between mt-14">
            <div className="w-full flex sm:px-20 justify-center">
                <img src={product?.image} alt="" className='p-10 border h-fit w-fit border-stone-400 object-contain px-10' />
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col p-10 lg:p-5">
                <div className="flex flex-col">

                    <p className='mb-5'>Ariel Wayz</p>
                    <h1 className='font-extrabold text-3xl'>{product?.name}</h1>
                    <p className='text-2xl font-semibold mt-2'>$ {product?.price.toFixed(2)} USD</p>
                    <div className="my-5 mr-10">
                        <span className=''>Size</span>
                        <div className="flex items-center flex-wrap lg:flex-nowrap gap-3 mt-2">
                            {['Small', 'Medium', 'Large', 'XLarge', '2X'].map((e, i) => <Button key={i} onClick={() => setActiveSize(i)} className={cn('bg-white text-black rounded-full border border-black hover:text-white hover:bg-black', activeSize === i && 'bg-black text-white')}>{e}</Button>)}
                        </div>
                    </div>
                    <div className="my-5">
                        <span className=''>Quantity</span>
                        <div className="border flex items-center gap-4 text-2xl font-bold mt-3 border-stone-400 px-4 py-1 w-fit">
                            <button onClick={() => count > 0 && setCount((prev) => prev - 1)} className='cursor-pointer'>-</button><span>{count}</span><button onClick={() => setCount((prev) => prev + 1)} className='cursor-pointer'>+</button>
                        </div>
                    </div>
                    <Button className='rounded-none bg-black text-white w-fit font-extrabold py-6 px-20' onClick={handleCart}>{cartItems.includes(product as Iproduct) ? 'Remove from' : "Add to"} cart</Button>
                </div>
                <div className="flex flex-col">

                    <p className='my-4 md:max-w-md'>The ‘Ariel Wayz Scribble Hoodie’ features a color pattern illustration surrounded by the letters of Ariel Wayz’s name on the front. Printed on a unisex white hoodie.</p>
                    <i className='my-4 md:max-w-md'>{product?.description}</i>
                    <p className='font-bold text-xl flex items-center gap-2'>
                        <BsUpload size={20} title="share" />
                        <span>share</span>
                    </p>
                </div>
            </div>
        </div>
        <div className="my-20 px-10 sm:px-28 w-full flex lg:overflow-x-hidden flex-col">
            <h1 className='font-bold text-lg mb-10'>You may also like</h1>
            <div className='flex items-center alsoLIke gap-5 overflow-x-scroll'>
                {
                    filteredProducts?.current?.map((e, i) => <ProductCard id={e.id} key={i} image={e.image} name={e.name} price={e.price} />)
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
    id: string
}


const ProductCard: FC<ProductCardProps> = ({ name, image, price, id }) => {
    return <Link replace={true} to={'/product/' + id} className='grow shrink-0 lg:grow-0 lg:shrink lg:h-96 flex flex-col'>
        <img src={image} alt={name + ' image'} className='w-full h-96 lg:h-full border border-stone-500' />
        <h5 className='text-black font-bold text-lg'>{name}</h5>
        <p>$ {price.toFixed(2)} USD</p>
    </Link>
}
