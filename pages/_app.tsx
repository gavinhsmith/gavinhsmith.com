import '../styles/tailwind.css'
import '../styles/globals.css'

const { library, config } = require('@fortawesome/fontawesome-svg-core');
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faMailReply, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faBars, faMailReply, faPhone);

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
