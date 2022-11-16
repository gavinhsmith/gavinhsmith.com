import NXHead from 'next/head'

interface Head {
    title: string,
    desc: string
}

export default function Head(props: Head) {
    let title = `[ Gavin Smith ]: ${props.title}`;
    return (
        <NXHead>
            <title>{title}</title>
            <meta name="description" content={props.desc} />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        </NXHead>
    )
}
