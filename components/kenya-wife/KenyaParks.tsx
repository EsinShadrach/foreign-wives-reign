import Image from 'next/image'
import React from 'react'

function KenyaParks() {
    return (
        <section className='bg-[#75A843] w-full h-[100%] flex flex-col gap-20 items justify-center sm:py-[5rem] py-4 sm:px-[3rem] px-2'>
            <div className='sm:w-[60%] w-[100%] mx-auto'>

                <h2 className='text-white font-bold text-[2rem] sm:text-[2.8rem] sm:leading-[4rem] leading-10 sm:tracking-wider tracking-wide text-center'>Sit back and lets take you on a journey of a life time</h2>
            </div>
            <div className='flex sm:flex-row flex-col space-y-8 justify-between sm:px-10 px-2'>
                <div className='relative'>
                    {/* wider screen view of the park name */}
                    <div className='hidden w-[200px] h-[180px] bg-white rounded-md absolute left-[-15%] top-20 text-center sm:flex items-center'>
                        <p className='text-[1.7rem] '>Amboseli National park, Kilmanjaro</p>

                    </div>
                    <Image src={'/fwr-kenya-slider1.png'} width={300} height={350} alt='kenya-park1' className='sm:w-[300px] w-[100%]' />
                </div>

                <div className='relative'>
                    <div className='hidden w-[200px] h-[180px] bg-white rounded-md absolute left-[-15%] top-20 text-center sm:flex items-center'>
                        <p className='text-[1.7rem] '>Lake Nakuru National Park</p>

                    </div>
                    <Image src={'/fwr-kenya-slider2.png'} width={300} height={350} alt='kenya-park1' className='sm:w-[300px] w-[100%]' />
                </div>
                <div className='relative'>
                    <div className='hidden w-[200px] h-[180px] bg-white rounded-md absolute left-[-15%] top-20 text-center sm:flex items-center'>
                        <p className='text-[1.7rem] '>Samburu National Reserve</p>

                    </div>
                    <Image src={'/fwr-kenya-slider1.png'} width={300} height={350} alt='kenya-park1' className='sm:w-[300px] w-[100%]'/>
                </div>
            </div>
        </section>
    )
}

export default KenyaParks