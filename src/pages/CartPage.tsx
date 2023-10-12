import { FC } from 'react'
import { Link } from 'react-router-dom'
import CartProductCard from '../components/cart/CartProductCard'
import { Button } from '../components/ui/Button'
import { useData } from '../contexts/DataProvider'

interface CartPageProps {

}

const CartPage: FC<CartPageProps> = () => {
    const {cartItems} = useData() 
    return <div className='w-full flex flex-col px-10 sm:px-20 items-center'>
        <div className="w-full flex items-center my-10 justify-between">
            <h1 className='text-3xl font-extrabold '>Your Cart</h1>
            <Link to={'/'} className='font-semibold underline'>Continue Shopping</Link>
        </div>
        <div className="w-full flex py-10 space-y-10 flex-col border-y-2 border-r-slate-600">
            {cartItems.map((e, i) => <CartProductCard key={i} image={e.image} price={e.price} title={e.name} />)}
        </div>
        <div className="w-full flex justify-between items-end mt-5">
            <h1 className="font-bold text-lg">
                Featured Collection
            </h1>
            <div className="flex flex-col ">
                <div className="w-fit gap-3 mb-3 self-end flex items-center">
                    <h1 className='text-lg font-bold '>Subtotal</h1>
                    <p>$ 65.00 USD</p>
                </div>
                <p className='text-sm my-2'>Taxes and shipping calculated at the checkout</p>
                <Button className='bg-black text-white rounded-none py-5'>Check out</Button>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
            {
                cartItems.slice(0, 3).map((e, i) => <ProductCard id={e.id} key={i} image={e.image} name={e.name} price={e.price} />)
            }
        </div>
        <Button className='rounded-none bg-black text-white mb-10'>View All</Button>
    </div>
}

export default CartPage




interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    id: string
}


const ProductCard: FC<ProductCardProps> = ({ name, image, price, id }) => {
    return <Link replace={true} to={'/product/' + id} className='lg:h-96 flex flex-col'>
        <img src={image} alt={name + ' image'} className='w-full h-80 lg:h-full border border-stone-500' />
        <h5 className='text-black font-bold text-lg'>{name}</h5>
        <p>$ {price.toFixed(2)} USD</p>
    </Link>
}
