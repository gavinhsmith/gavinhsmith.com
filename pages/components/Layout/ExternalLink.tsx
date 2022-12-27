import { ReactNode } from "react"

interface ExternalLink {
    children?: ReactNode,
    href: string
}

export default function ExternalLink({href, children}: ExternalLink) {
    return <a className='hover:bg-primary' target='_blank' rel='noreferrer' href={href}>{children}</a>
}