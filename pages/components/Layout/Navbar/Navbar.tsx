import Image from 'next/image'
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NavbarLink from './NavbarLink'

import Icon from '../../../../public/icon.png'
import pages from './NavbarItems.json'
import { useState } from 'react';

type PageURL = keyof typeof pages;

interface Navbar {
    current: PageURL;
}

export default function Navbar({current}: Navbar) {

    let [navbar_down, setNavbarDown] = useState(false);

    return (
        <nav className={'fixed t-0 l-0 w-full text-primary p-8 z-10 ' + (navbar_down ? "bg-light" : "") + " md:bg-clear"}>
            <div className='flex flex-col md:flex-row items-center justify-left w-full md:w-auto md:justify-between'>
                <div className='flex w-full md:w-auto flex-row justify-between items-center'>
                    <Link className='flex items-center' href={pages[current] === pages["home"] ? '#' : '/'}>
                        <Image className='h-10 w-auto' src={Icon} alt='[G] Logo' />
                        <h1 className='mx-3 font-bold'> avin Smith</h1>
                    </Link>
                    <FontAwesomeIcon onClick={() => setNavbarDown(!navbar_down)} className={'h-10 w-auto px-2 mr-2 block md:hidden ' + (navbar_down ? "bg-primary text-light" : "")} icon="bars"/>
                </div>
                <div className={'flex flex-col md:flex-row justify-center ' + (navbar_down ? 'block' : 'hidden') + ' md:block'}>
                    {Object.values(pages).map((page, index) => {
                        return <NavbarLink key={index} navbarDown={navbar_down} current={current === Object.keys(pages)[index]} href={page.link}>{page.title}</NavbarLink>
                    })}
                </div>
            </div>
        </nav>
    )
}