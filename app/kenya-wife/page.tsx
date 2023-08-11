import KenyaCities from '@/components/kenya-wife/KenyaCities'
import Header from '@/components/kenya-wife/Header'
import KenyaParks from '@/components/kenya-wife/KenyaParks'
import KenyaShowcase from '@/components/kenya-wife/KenyaShowcase'
import KenyaTrip from '@/components/kenya-wife/KenyaTrip'
import React from 'react'
import KenyaMeet from '@/components/kenya-wife/KenyaMeet'
import Footer from '@/components/kenya-wife/Footer'

function page() {
  return (
    <div>
        <Header/>
        <KenyaShowcase/>
        <KenyaTrip/>
        <KenyaParks/>
        <KenyaCities/>
        <KenyaMeet/>
        <Footer/>
    </div>
  )
}

export default page