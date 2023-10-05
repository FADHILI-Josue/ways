import { FC, useState } from 'react'
import { navLinks } from '../lib/constants'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'
import { buttonVariants } from './ui/Button'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = () => {
const [active, setActive] = useState<number>(0)
  return <div className='w-full p-6 pl-20 pr-10 bg-black flex flex-row border border-black items-center justify-between'>
    <h1 className='text-white text-4xl'>ARIEL WAYZ</h1>

    <div className="h-full flex justify-between px-[12%] flex-grow items-center">
      {navLinks.map((e, i)=><Link to={e.route} key={i} className={cn('text-white/60 hover:text-white cursor-pointer relative', active === i && 'text-white')} style={{ transition: ".3s" }} onClick={()=>setActive(i)}>{e.name} <span className={cn({'absolute h-1 left-0 -bottom-2 w-[70%] bg-white rounded-full':active === i})} /></Link>)}
    </div>
    <div className="h-full flex justify-between gap-4 items-center">
      <Link to={'/login'} className={buttonVariants({variant:'outline'})}>Login</Link>
      <Link to={'/login'} className={buttonVariants({variant:'outline'})}>Register</Link>
      <Link to={'/cart'} className={buttonVariants()}>cart (0)</Link>
    </div>
  </div>
}

export default Navbar