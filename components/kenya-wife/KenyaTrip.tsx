import Image from 'next/image'
import React from 'react'
import KenyaButton from './KenyaButton'
import CustomButton from '../CustomButton'

function KenyaTrip() {
    return (
        <section className='pt-[5rem] pb-4'>
            <div className='w-[80%] mx-auto flex flex-col gap-y-28'>


                <div className='flex justify-between items-center '>
                    <Image src={'/fwr-kenya-trip1.png'} width={450} height={400} alt='kenya-trip1' />
                    <div className='w-[50%] space-y-4'>
                        <h2 className='text-[3rem] font-bold leading-[3rem]'>Plan your trips and airport needs</h2>
                        <p className='font-[400] text-[1.4rem] leading-10 tracking-wider w-[70%]'>Life is meant to be easy and soft and with us we can give you such life</p>
                        {/* <KenyaButton /> */}
                        <CustomButton >
                            Learn more
                        </CustomButton>
                    </div>
                </div>
                <div className='flex flex-row-reverse justify-between items-center'>
                    <Image src={'/fwr-kenya-trip2.png'} width={450} height={400} alt='kenya-trip1' />
                    <div className='w-[50%] space-y-4'>
                        <h2 className='text-[3rem] font-bold leading-[3rem]'>Beautiful and cozy accomodations for you</h2>
                        <p className='font-[400] text-[1.4rem] leading-10 tracking-wider w-[70%]'>With beautiful and tastefully furnished apartments we have designed just for you</p>
                        <CustomButton >
                            Learn more
                        </CustomButton>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default KenyaTrip