import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>

<footer className="text-gray-400 bg-cyan-900 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <span
          className=" rounded-full">
          <Image
          src={'/logoo.jpg'}
          alt='logo'
          height={100}
          width={100}
          className='rounded-full'
          ></Image>
        </span>
        <span className="ml-3 text-2xl">SULTAN HEALTH CARE</span>
      </a>
      <p className="mt-2 text-sm text-white">
        Sultan Health Care Clinic and Medical
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          About us
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link  href={'/component/hero'} className="text-gray-400 hover:text-white">Home</Link>
          </li>
          <li>
            <Link href={'/component/careers'} className="text-gray-400 hover:text-white">Careers</Link>
          </li>
          <li>
            <Link href={'/component/about'} className="text-gray-400 hover:text-white">About</Link>
          </li>
          <li>
            <Link href={'/component/contact'} className="text-gray-400 hover:text-white">Contact</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={'/component/careers'} className="text-gray-400 hover:text-white">INSTRUCTION</Link>
          </li>
          <li>
            <Link href={'/component/careers'} className="text-gray-400 hover:text-white">Looking for a job</Link>
          </li>
          <li>
            <Link href={'/component/service'} className="text-gray-400 hover:text-white">Services</Link>;
            
          </li>
          <li>
            <Link href={'/component/footer'} className="text-gray-400 hover:text-white">Footer</Link>
          </li>
        </nav>
       
      </div>
    </div>
  </div>
  <div className="bg-cyan-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white text-sm text-center sm:text-left">
        © Sultan Health Care Clinic and Medical —
       @abc123@gmail.com
       <p>Web-developer Muhammad Sultan</p>
      </p>
     
        
      
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer