export const LINK_SYMBOLS = {
    NAME: {
        OPEN: "[",
        CLOSE: "]"
    },
    LINK: {
        OPEN: "(",
        CLOSE: ")"
    }
}

export const LINK_REGEXP: RegExp = new RegExp("\\" + LINK_SYMBOLS.NAME.OPEN + "(.*?)\\" + LINK_SYMBOLS.NAME.CLOSE + "\\" + LINK_SYMBOLS.LINK.OPEN + "(.*?)\\" + LINK_SYMBOLS.LINK.CLOSE);

export type Link = {
    name: string,
    href: string
};

export function stringHasLinks(string: string): boolean {
    let matched = LINK_REGEXP.exec(string);
    return (matched !== null) ? true : false;
}

export function createLinklessArray(string: string): string[] {
    let splitter = `|SPLT991921|`; //Garbage unlikely to be in strings
    string = string.replace(LINK_REGEXP, splitter);
    return string.split(splitter);
}

export default function extractLinks(string: string): Link[] {
    let result: Link[] = [];

    while(stringHasLinks(string)) {
        let matched = <RegExpExecArray>LINK_REGEXP.exec(string);
        result.push({
            name: matched[1],
            href: matched[2]
        });
        string = string.replace(LINK_REGEXP, "x");
    }

    return result; 
}