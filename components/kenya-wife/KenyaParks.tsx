import Image from 'next/image'
import React from 'react'

function KenyaParks() {
  return (
    <section className='bg-[#75A843] w-full h-[100%] flex flex-col gap-20 items justify-center py-[5rem] px-[3rem]'>
        <div className='w-[60%] mx-auto'>

        <h2 className='text-white font-bold text-[2.8rem] leading-[4rem] tracking-wider text-center'>Sit back and lets take you on a journey of a life time</h2>
        </div>
        <div className='flex justify-between px-10'>
            <div className='relative'>
                <div className='w-[200px] h-[180px] bg-white rounded-md absolute left-[-15%] top-20 text-center flex items-center'>
                    <p className='text-[1.7rem] '>Amboseli National park, Kilmanjaro</p>

                </div>
                <Image src={'/fwr-kenya-slider1.png'} width={300} height={350} alt='kenya-park1'/>
            </div>

            <div className='relative'>
                <div className='w-[200px] h-[180px] bg-white rounded-md absolute left-[-15%] top-20 text-center flex items-center'>
                    <p className='text-[1.7rem] '>Lake Nakuru National Park</p>

                </div>
                <Image src={'/fwr-kenya-slider2.png'} width={300} height={350} alt='kenya-park1'/>
            </div>
            <div className='relative'>
                <div className='w-[200px] h-[180px] bg-white rounded-md absolute left-[-15%] top-20 text-center flex items-center'>
                    <p className='text-[1.7rem] '>Samburu National Reserve</p>

                </div>
                <Image src={'/fwr-kenya-slider1.png'} width={300} height={350} alt='kenya-park1'/>
            </div>
        </div>
    </section>
  )
}

export default KenyaParks