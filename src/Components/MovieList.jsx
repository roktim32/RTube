import React from 'react'
import videoList from "./Movies"

const MovieList = () => {
    console.log(videoList)
    return (
        <div className='mt-10'>
            <p className='px-10 text-white text-[20px] font-bold'>New Release</p>
            <div className='w-full py-5 px-5 overflow-scroll scroll whitespace-nowrap scroll-smooth'>
                {
                    videoList.map((item) => (
                        <div key={item.id} className='inline-block m-2 md:m-3'>
                            <img className='w-[130px] h-[200px] 
                            transition-all ease-in-out duration-500 rounded-2xl object-cover md:w-[160px] md:h-[240px] cursor-pointer hover:scale-125
                            ' src={item.image} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList