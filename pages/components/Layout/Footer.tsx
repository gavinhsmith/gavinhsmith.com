export default function Footer() {
    return (
        <footer className='bg-dark text-light p-8 flex'>
            <div className='m-2'>
                <p className='m-2'>Contact Info</p>
                <p className='p-1 m-1 hover:bg-primary'><a target='_blank' rel='noreferrer' href="https://github.com/gavinhsmith">gavinhsmith @ GitHub</a></p>
                <p className='p-1 m-1 hover:bg-primary'><a target='_blank' rel='noreferrer' href="mailto:gavinhsmith2005@gmail.com">gavinhsmith2005@gmail.com</a></p>
            </div>
            <div className='m-2'>
                <p className='m-2'>Other Links</p>
            </div>
        </footer>
    )
}