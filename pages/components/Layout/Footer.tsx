import ExternalLink from "./ExternalLink";

export default function Footer() {
    return (
        <footer className='p-4 bg-dark text-light w-full flex flex-col md:flex-row items-center justify-center md:justify-between'>
            <p>&copy; 2022 Gavin Smith</p>
            <div className='flex flex-col md:flex-row items-center align-center'>
                <ExternalLink href="mailto:gavinhsmith2005@gmail.com"><span className='m-1'>gavinhsmith2005@gmail.com</span></ExternalLink>
                <span className='hidden md:block mx-3'>&#x2022;</span>
                <ExternalLink href="https://github.com/gavinhsmith"><span className='m-1'>gavinhsmith @ GitHub</span></ExternalLink>
            </div>
        </footer>
    )
}