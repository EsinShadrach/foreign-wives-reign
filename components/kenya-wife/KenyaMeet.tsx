import Image from 'next/image'
import React from 'react'
import KenyaButton from './KenyaButton'
import CustomButton from '../CustomButton'

function KenyaMeet() {
    return (
        <section className='pt-[5rem] pb-4'>
            <div className='w-[80%] mx-auto flex flex-col gap-y-28'>


                <div className='flex justify-between items-center '>
                    <Image src={'/fwr-kenya-connect.png'} width={450} height={400} alt='kenya-trip1' />
                    <div className='w-[50%] space-y-4'>
                        <h2 className='text-[3rem] font-bold leading-[3rem]'>Meet friends, join groups and connect</h2>
                        <p className='font-[400] text-[1.4rem] leading-10 tracking-wider w-[70%]'>with our group and suport feature you can meet peple and connect</p>
                        {/* <KenyaButton /> */}
                        <CustomButton >
                            Learn more
                        </CustomButton>
                    </div>
                </div>
                

            </div>
        </section>
    )
}

export default KenyaMeet