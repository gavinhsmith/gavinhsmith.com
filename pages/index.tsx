import Image from 'next/image'
import Link from 'next/link'

import Head from './Head'
import Footer from "./Footer"

import Icon from "../public/icon.svg"

export default function Home() {
  return (
    <section>
      <Head title={"Home"} desc={"Gavin Smith: Developer at Large"} />
      <div className='w-screen h-screen'>
        <div className='flex items-center justify-center h-full w-full'>
          <div className='align-middle basic-1/3 h-56 w-auto m-4'>
            <Image className='h-full w-full' src={Icon} alt='[G] Icon' />
          </div>
          <div className='h-56 basic-2/3 w-auto m-4 p-2 bg-dark text-light align-middle'>
            &gt; I&apos;M WORKING ON IT...<br/>
            &gt;<br/>
            &gt;<br/>
            &gt;<br/>
            &gt;<br/>
            &gt;<br/>
            &gt; FIND UPDATES <Link className='hover:bg-primary' href='https://github.com/gavinhsmith/gavinhsmith.com'>[HERE]</Link>.<br/>
            &gt;
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
