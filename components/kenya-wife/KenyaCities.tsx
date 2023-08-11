import Image from 'next/image'
import React from 'react'

function KenyaCities() {
    const imageUrl = 'url("/fwr-kenya-nairobi.png")'
  return (
    // <div className='py-[8rem] px-[4rem] flex items-center justify-center'>
    <div style={{backgroundImage: imageUrl, height:'540px', padding: '2rem', marginTop: '5rem', marginBottom: '5rem', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '80%',  marginLeft: 'auto', marginRight: 'auto'}}>
        {/* <Image src={'/fwr-kenya-nairobi.png'} width={1040} height={540} alt='nairobi kenya'/> */}
    </div>
  )
}

export default KenyaCities