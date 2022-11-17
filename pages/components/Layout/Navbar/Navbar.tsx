import Image from 'next/image'
import Link from 'next/link';

import NavbarLink from './NavbarLink'

import Icon from '../../../../public/icon.png'

type PageURL = 'home' | 'projects' | 'blog' | 'contact';

interface Navbar {
    current: PageURL;
}

export default function Navbar({current}: Navbar) {
    let isHome = current === 'home';
    let isProjects = current === 'projects';
    let isBlog = current === 'blog';
    let isContact = current === 'contact';

    return (
        <nav className='fixed t-0 l-0 w-full bg-light text-primary p-8 z-10'>
            <div className='flex items-center justify-between'>
                <Link href={isHome ? '#' : '/'} className='flex items-center'>
                    <Image className='h-10 w-auto' src={Icon} alt='[G] Logo' />
                    <h1 className='mx-3 font-bold'> avin Smith</h1>
                </Link>
                <div className='flex justify-center'>
                    <NavbarLink current={isHome} href="/">Home</NavbarLink>
                    <NavbarLink current={isProjects} href="/projects">Projects</NavbarLink>
                    <NavbarLink current={isBlog} href="/blog">Blog</NavbarLink>
                    <NavbarLink current={isContact} href="/contact">Contact/Hire Me</NavbarLink>
                </div>
            </div>
        </nav>
    )
}