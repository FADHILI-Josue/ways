import { FC } from 'react'
import { Button } from './ui/Button'
import { facebook, instagram, twitter, youtube } from '../assets'
import { Link } from 'react-router-dom'

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {
    return <div className='w-full bg-black flex divide-y-2 divide-gray-500 flex-col'>
        <div className="w-full flex justify-between px-20 pt-10">
            <div className="flex flex-col gap-2">
                <h1 className='text-5xl font-extrabold ml-10 text-white'>ARIEL WAYZ</h1>
                <i className='text-white/60 text-center text-xl max-w-md'>Indulge in the sweetness of your favourite music by your favourite artist</i>
            </div>
            <div className="flex flex-col items-center">
                <h3 className='text-white font-semibold mb-4'>Join the Ariel Nation for latest news and updates</h3>
                <div className=' p-2 flex items-center bg-white rounded-full'>
                    <input className='w-[90%] pl-4 outline-none border-none mr-3 rounded-full' placeholder='Enter your email' />
                    <Button className='bg-black text-white rounded-full'>Subscribe</Button>
                </div>
                <div className="flex items-center justify-center gap-3 my-7">
                    {([twitter, instagram, facebook, youtube] as const).map((e,i)=><img key={i} src={e} className='h-7' />)}
                </div>
            </div>
        </div>
        <div className="flex justify-between text-white/50 px-20 py-4">
            <h4 className=''>@2023 AfricaInColors. All rights reserved</h4>
            {['FAQs', 'Privacy Conditions','Terms and Conditions'].map((e,i)=><Link key={i} to={e}>{e}</Link>)}
        </div>
    </div>
}

export default Footer