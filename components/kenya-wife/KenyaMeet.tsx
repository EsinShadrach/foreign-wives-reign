import Image from 'next/image'
import React from 'react'
import KenyaButton from './KenyaButton'
import CustomButton from '../CustomButton'
import RippleButton from '@/utils/RippleButton'

function KenyaMeet() {
    return (
        <section className='sm:pt-[5rem] pt-[3rem] pb-4'>
            <div className='sm:w-[80%] w-[100%] mx-auto flex flex-col  px-4'>


                <div className='flex justify-between items-center flex-col sm:flex-row'>
                    <Image src={'/fwr-kenya-connect.png'} width={450} height={400} alt='kenya-trip1' />
                   
                    <div className='sm:w-[50%] w-[100%] space-y-4 mt-2'>
                        <h2 className='sm:text-[3rem] text-[2rem] font-bold leading-[3rem]'>Meet friends, join groups and connect</h2>
                        <p className='font-[400] text-[1.4rem] leading-10 tracking-wider sm:w-[70%] w-[100%]'>with our group and suport feature you can meet peple and connect</p>
                        
                        <RippleButton className='border-2 border-[#75A843] rounded-full py-1.5 px-3 transition-all duration-300 shadow-md active:scale-90 hover:scale-90 text-[#75A843] '>
                            Learn more
                        </RippleButton>
                    </div>
                </div>
                

            </div>
        </section>
    )
}

export default KenyaMeet