import { ReactNode, useState } from 'react';

import Link from 'next/link';

interface NavbarLink {
    href: string,
    current?: boolean,
    navbarDown?: boolean,
    children: ReactNode

}

export default function NavbarLink(props: NavbarLink) {
    /* Use this when pages work again.
    return (
        <Link className={'px-2 mr-2 ' + (props.current ? 'bg-primary text-light font-bold' : 'hover:bg-primary hover:text-light')} href={props.current ? '#' : props.href}>{(props.current ? '> ' : '') + props.children}</Link>
    )
    */
   
    return (
        <Link className={'px-2 mr-2 ' + (props.current ? 'bg-grey text-light font-bold' : 'text-grey line-through') + " " + (props.navbarDown ? "w-full" : "")} href='#'>{(props.current ? '> ' : '') + props.children}</Link>
    )
}