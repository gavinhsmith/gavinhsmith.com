interface ConsoleLine {
    children?: any,
    hide?: boolean
}

let keyid: number = -1;

export function generateKey(): string {
    keyid++;
    return `cl-${Math.floor(Math.random() * 1000000)}-${(new Date()).getTime()}-${keyid}`;
}

export default function ConsoleLine(props: ConsoleLine) {
    return <span className='flex'><span className={'mr-3' + (props.hide ? " invisible" : "")}>&gt;</span><span>{props.children}</span></span>
}