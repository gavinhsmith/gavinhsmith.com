export type BaseCommand = 'help' | 'helloworld' | 'info';

export type HelpCommand = `help ${BaseCommand}`;
export type HelloWorldCommand = 'helloworld';
export type InfoCommand = 'info';

export type Command = HelpCommand | HelloWorldCommand | InfoCommand;

export type CommandHelpInfo = {
    [key in BaseCommand]: string;
};

export type CommandResponse = [number, ...string[]];

export const HELP_INFO: CommandHelpInfo = {
    'help': 'help [command]',
    'helloworld': 'helloworld',
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

    } else if (base === "helloworld") {
        return [0, 'Hello, World!'];
    } else if (base === "info") {
        return [0,
            'THIS WEBSITE IS STILL UNDER DEVELOPMENT...',
            'UPDATES CAN BE FOUND [HERE](https://github.com/gavinhsmith/gavinhsmith.com).'
        ];
    } else {
        return [0, "Unknown command: " + base];
    }
}