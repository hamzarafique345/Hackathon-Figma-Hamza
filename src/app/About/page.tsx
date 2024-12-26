import About from '@/components/(About)/about'
import Popular from '@/components/(popular product)/popular'
import Footer from '@/components/footer'
import React from 'react'

export default function page() {
  return (
    <div>
      <About/>
      <Popular/>
      <Footer/>
    </div>
  )
}
