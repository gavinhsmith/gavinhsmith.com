export type BaseCommand = 'help' | 'contact' | 'info';

export type HelpCommand = `help ${BaseCommand}`;
export type ContactCommand = 'contact';
export type InfoCommand = 'info';

export type Command = HelpCommand | ContactCommand | InfoCommand;

export type CommandHelpInfo = {
    [key in BaseCommand]: string;
};

export type CommandResponse = [number, ...string[]];

export const HELP_INFO: CommandHelpInfo = {
    'help': 'help [command]',
    'contact': 'contact',
    'info': 'info'
}

export function handleCommand(command: BaseCommand | Command): CommandResponse {
    let base: BaseCommand = <BaseCommand>command.split(" ")[0];
    
    if (base === "help") {
        if (command.split(" ")[1] && command.split(" ")[1].length > 0) {
            let help_cmd: BaseCommand = command.split(" ")[1] as BaseCommand;
            return [0, `Usage for ${help_cmd}: ${HELP_INFO[help_cmd]}`]
        } else {
            let str = ['Help: '];
            let commands: BaseCommand[] = Object.keys(HELP_INFO) as BaseCommand[];
            for (let cmd of commands) {
                str.push(`- Usage for ${cmd}: ${HELP_INFO[cmd]}`);
            }
            return [0, ...str];
        }

    } else if (base === "contact") {
        return [0, 'Reach me at:', 'Mail: [me@gavinhsmith.com](mailto:me@gavinhsmith.com)', 'GitHub: [@gavinhsmith](https://github.com/gavinhsmith/gavinhsmith.com)'];
    } else if (base === "info") {
        return [0,
            'Howdy!', '',
            'My name is Gavin Smith, and I am a hard-working freelance Web/IoT Developer that is always looking for projects to take on. Wether you need a portfolio website or IT help, I have been interested in computers since I was 10 years old.'
        ];
    } else {
        return [0, "Unknown command: " + base];
    }
}