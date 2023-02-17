import Head from "./components/Layout/Head"
import Navbar from "./components/Layout/Navbar/Navbar"
import Footer from "./components/Layout/Footer"
import ConsoleLine, {generateKey} from "./components/Console/ConsoleLine"
import ExternalLink from "./components/Layout/ExternalLink";

import { KeyboardEvent, useState } from "react"

import {Command, CommandResponse, handleCommand} from "../modules/CommandHandler";
import extractLinks,{ createLinklessArray } from "../modules/MarkdownLinkExtractor"

export default function Home() {

  let [console_lines, setConsoleLines] = useState<JSX.Element[]>([]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    e.currentTarget.placeholder = "";

    if (e.key !== "Enter" || e.currentTarget.value.length <= 0) return;

    let command: Command = e.currentTarget.value as Command;

    // Process Command
    let response: CommandResponse = handleCommand(command);

    response.shift();
    let strings: string[] = response as string[];

    let fin_res: JSX.Element[] = [];
    for (let str of strings) {
      let non_link_split = createLinklessArray(str);
      let links = extractLinks(str);

      console.info(non_link_split, links);

      let line: JSX.Element[] = [];
      for (let i = 0; i < non_link_split.length; i++) {
        line.push(<span key={generateKey()}>{non_link_split[i]}</span>);

        if (i < links.length) {
          line.push(<ExternalLink key={generateKey()} href={links[i].href}>{"[" + links[i].name + "]"}</ExternalLink>);
        }
      }

      fin_res.push(<span>{line}</span>);
    }

    let fin = [<ConsoleLine key={generateKey()}>{command}</ConsoleLine>];
    for (let res of fin_res) {
      fin.push(<ConsoleLine hide key={generateKey()}>{res}</ConsoleLine>)
    }

    setConsoleLines([...console_lines, ...fin]);
    e.currentTarget.value = "";
  }

  return (
    <section>
      <Head title={"Home"} desc={"Gavin Smith: Developer at Large"} />
      <Navbar current='home'/>
      <div className='w-screen h-screen'>
        <div className='flex h-full w-full items-center justify-center'>
          <div className='absolute p-3 h-1/2 w-5/6 bg-dark text-light' />
          <div className='aboslute w-screen h-screen backdrop-blur-sm' />
          <div className='absolute flex p-3 h-1/2 w-5/6 text-light flex-col justify-between'>
            <div className='overflow-hidden flex h-full flex-col justify-end'>{console_lines}</div>
            <div className='flex'>
              <span className='mr-3'>&gt; </span>
              <input onKeyDown={handleKeyDown} className='bg-clear w-full focus:outline-none focus:border-none focus:ring-0' placeholder='Enter "help" for a list of all commands' type="text" />
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </section>
  )
}