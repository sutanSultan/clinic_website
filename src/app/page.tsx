import React from 'react'
import Hero from './component/hero/page'

import About from './component/about/page'
import Careers from './component/careers/page'
import Contact from './component/contact/page'
import Service from './component/service/page'
function Home() {
  return (
    <div>
      <Hero/>
      <About />
      <Service />
      <Careers />
      <Contact />
    </div>
  )
}

export default Home