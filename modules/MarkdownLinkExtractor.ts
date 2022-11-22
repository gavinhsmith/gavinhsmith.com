export const LINK_SYMBOLS = {
    NAME: {
        OPEN: "<",
        CLOSE: ">"
    },
    LINK: {
        OPEN: "(",
        CLOSE: ")"
    }
}

export const LINK_REGEXP: RegExp = /\<(.*?)\>\((.*?)\)/;

export type Link = {
    name: string,
    href: string
};

export function stringHasLinks(string: string): boolean {
    return string.indexOf(LINK_SYMBOLS.NAME.OPEN) >= 0 
        && string.indexOf(LINK_SYMBOLS.NAME.CLOSE) > string.indexOf(LINK_SYMBOLS.NAME.OPEN) 
        && string.indexOf(LINK_SYMBOLS.LINK.OPEN) == string.indexOf(LINK_SYMBOLS.NAME.OPEN)+1 
        && string.indexOf(LINK_SYMBOLS.LINK.CLOSE) > string.indexOf(LINK_SYMBOLS.LINK.OPEN);
}

export function extactLinkStrings(string: string): string[] {
    let res: string[] = [];
    while (stringHasLinks(string)) {
        res.push(string.slice(string.indexOf(LINK_SYMBOLS.NAME.OPEN), string.indexOf(LINK_SYMBOLS.LINK.CLOSE)+1));
        string = string.slice(string.indexOf(LINK_SYMBOLS.LINK.CLOSE));
    }
    return res;
}

export default function extractLinks(string: string): Link[] {
    if (!stringHasLinks(string)) return [];
    let links_str = extactLinkStrings(string);
    let res: Link[] = [];

    for (let str in links_str) {
        res.push({
            name: str.slice(str.indexOf(LINK_SYMBOLS.NAME.OPEN)+1, str.indexOf(LINK_SYMBOLS.NAME.CLOSE)),
            href: str.slice(str.indexOf(LINK_SYMBOLS.LINK.OPEN)+1, str.indexOf(LINK_SYMBOLS.LINK.CLOSE))
        })
    }
    
    return res;
}