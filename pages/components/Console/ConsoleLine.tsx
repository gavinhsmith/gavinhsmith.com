interface ConsoleLine {
    children?: any,
    hide?: boolean
}

export function generateKey(): string {
    return `cl-${Math.floor(Math.random() * 1000000)}-${(new Date()).getTime()}`;
}

export default function ConsoleLine(props: ConsoleLine) {
    return <span className='flex'><span className={'mr-3' + (props.hide ? " invisible" : "")}>&gt;</span><span>{props.children}</span></span>
}