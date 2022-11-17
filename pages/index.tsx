import Image from 'next/image'

import Icon from "../public/icon.svg"

import Head from "./components/Layout/Head"
import Navbar from "./components/Layout/Navbar/Navbar"
import Footer from "./components/Layout/Footer"

export default function Home() {
  return (
    <section>
      <Head title={"Home"} desc={"Gavin Smith: Developer at Large"} />
      <Navbar current='home'/>
      <div className='w-screen h-screen'>
        <div className='absolute flex items-center justify-center h-full w-full'>
          <div className='align-middle basic-1/3 h-56 w-auto m-4'>
            <Image className='h-full w-full' src={Icon} alt='[G] Icon' />
          </div>
          <div className='flex items-bottom flex-col h-56 basic-2/3 w-auto m-4 p-2 bg-dark text-light align-middle'>
            <span>&gt;</span><br/>
            <span>&gt; <span className='invisible'>FIND UPDATES <a className='hover:bg-primary' target='_blank' rel='noreferrer' href='https://github.com/gavinhsmith/gavinhsmith.com'>[HERE]</a>.</span></span>
          </div>
        </div>
        <div className='absolute h-full w-full backdrop-blur-sm'></div>
        <div className='invisible absolute flex items-center justify-center h-full w-full'>
          <div className='align-middle basic-1/3 h-56 w-auto m-4'>
            <Image className='h-full w-full' src={Icon} alt='[G] Icon' />
          </div>
          <div className='flex items-bottom flex-col h-56 basic-2/3 w-auto m-4 p-2 bg-dark text-light align-middle'>
            <span>&gt; <span className='visible'>I&apos;M WORKING ON IT...</span></span><br/>
            <span>&gt; <span className='visible'>FIND UPDATES <a className='hover:bg-primary' target='_blank' rel='noreferrer' href='https://github.com/gavinhsmith/gavinhsmith.com'>[HERE]</a>.</span></span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
