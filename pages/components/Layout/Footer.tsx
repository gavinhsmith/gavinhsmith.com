import ExternalLink from "./ExternalLink";
import LoadingIcon from "./LoadingIcon";

export default function Footer() {
    return (
        <footer className='p-4 bg-dark text-light w-full flex flex-col md:flex-row items-center justify-center md:justify-between'>
            <p>&copy; 2024 Gavin Smith</p>
            <div className='flex flex-col md:flex-row items-center align-center'>
                <ExternalLink href="mailto:me@gavinhsmith.com"><span className='m-1'>me@gavinhsmith.com</span></ExternalLink>
                <span className='hidden md:block mx-3'><LoadingIcon /></span>
                <ExternalLink href="https://github.com/gavinhsmith"><span className='m-1'>gavinhsmith @ GitHub</span></ExternalLink>
            </div>
        </footer>
    )
}