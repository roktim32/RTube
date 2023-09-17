import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between px-3'>
            <div className='flex items-center'>
                <img src="./assets/logo.png" className='h-[50px]' />
                <ul className='flex gap-7'>
                    <li className='hover:scale-110 cursor-pointer transition-all hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-white hover:font-bold'>Movies</li>
                    <li className='hover:scale-110 cursor-pointer transition-all hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-white hover:font-bold'>Series</li>
                    <li className='hover:scale-110 cursor-pointer transition-all hover:bg-red-700 px-3 py-1 pb-2 rounded-full text-white hover:font-bold'>Kids</li>
                </ul>
            </div>
            <img src="./assets/userimage.png" className='w-[40px] rounded-full m-5 invisible md:visible lg:visible hover:scale-90 transition-all ease-in-out' />
        </div>
    )
}

export default Header