import { FC, useState } from 'react'
import { navLinks } from '../lib/constants'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'
import { buttonVariants } from './ui/Button'
import { useData } from '../contexts/DataProvider'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = () => {
  const {cartItems} = useData()
const [active, setActive] = useState<number>(0)
  return <div className='w-full px-4 py-6 md:py-6 md:px-6 md:pl-20 md:pr-10 bg-black flex flex-row border border-black items-center justify-between'>
    <Link to={'/'} className='text-white text-lg sm:text-2xl md:text-4xl whitespace-nowrap'>ARIEL WAYZ</Link>

    <div className="h-full hidden lg:flex justify-center gap-10 px-10 items-center">
      {navLinks.map((e, i)=><Link to={e.route} key={i} className={cn('text-white/60 hover:text-white cursor-pointer relative', active === i && 'text-white')} style={{ transition: ".3s" }} onClick={()=>setActive(i)}>{e.name} <span className={cn({'absolute h-1 left-0 -bottom-2 w-[70%] bg-white rounded-full':active === i})} /></Link>)}
    </div>
    <div className="h-full flex justify-between gap-4 items-center">
      <Link to={'/login'} className={cn(buttonVariants({variant:'outline'}), ' text-xs sm:text-sm py-1 px-3 sm:py-2 sm:px-6')}>Login</Link>
      <Link to={'/login'} className={cn(buttonVariants({variant:'outline'}), ' text-xs sm:text-sm py-1 px-3 sm:py-2 sm:px-6')}>Register</Link>
      <Link to={'/cart'} className={cn(buttonVariants(), 'hidden md:block whitespace-nowrap')}>cart ({cartItems.length})</Link>
    </div>
  </div>
}

export default Navbar