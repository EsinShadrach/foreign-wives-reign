import Image from 'next/image'
import React from 'react'
import KenyaButton from './KenyaButton'
import { url } from 'inspector'
import CustomButton from '../CustomButton'



function Header() {

  const imageUrl = 'url("/fwr-kenya-hero.png")'

  const heroBg = {
    backgroundImage: '/fwr-kenya-hero.png',
    backgroundPosition: 'cover',
    backgroudRepeat: 'no-repeat'
  }

  const containerStyle = {
    backgroundImage: imageUrl,
    backgroundSize: 'cover', // Optional: Adjust the background size
    backgroundRepeat: 'no-repeat', // Optional: Adjust the background repeat
    // You can add more CSS properties as needed
    width: '100%',
    height: '500px',
  };
  return (
    <header style={{backgroundImage: imageUrl, height:'713px', padding: '2rem', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%', marginBottom: '2rem'}}>
        <nav className='w-[90%] mx-auto flex justify-between items-center  '>
            
                <Image src={'/fwr-kenya-logo.png'} alt='kenya-wife-logo' width={100} height={40} />
            

            <ul className='flex space-x-8 items-center text-white'>
                <li>Home</li>
                <li>Airport</li>
                <li>Accomodation</li>
                <li>Activities</li>
                <li>Groups and support</li>
                
            </ul>
            {/* <KenyaButton/> */}
            <CustomButton>
              Join Us
            </CustomButton>
            
            
        </nav>
    </header>
  )
}

export default Header