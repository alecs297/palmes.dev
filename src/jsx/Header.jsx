import { useState } from "react";
import Typewritter from "./Typewritter";

function Header() {

    const menu = [
        {
            title: "GitHub",
            url: "https://github.com/alecs297"
        },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/alecs297"
        },
        {
            title: "Model Source",
            url: "https://skfb.ly/o6KIu"
        }
    ];

    const [open, setOpen] = useState(false)
    
    return (
        <div className={"w-3/4 max-w-6xl text-center mx-auto p-5 h-6 flex items-center place-content-between sticky bottom-48 rounded-lg shadow-inner shadow-white-100 bg-black border-2 border-gray-200 z-90"}>
            <div>
                <h1 className="w-1/6 md:inline">palmes.dev</h1>
                <Typewritter className={"hidden md:inline"} textClassName={"text-sm text-stone-400"} cursorClassName={"text-stone-600"} options={{delete: false}}> | scroll to get started</Typewritter>
            </div>
            <div className="w-1/6">
                <ul className="bg-black border-y border-gray-800 absolute left-0 md:left-auto -top-10 md:w-1/6 w-full float-right -translate-y-full" hidden={!open}>
                    <li className="underline underline-offset-8 m-2" >Quick Links</li>
                    { menu.map(entry => {
                        return (
                            <li key={"nav-button-" + entry.title}>
                                <a target="_blank" rel="noreferrer noopener" href={entry.url}>
                                    {entry.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <button className="w-full" onClick={() => setOpen(!open)}>{ open ? "</>" : "< >" }</button>
            </div>
        </div>
    )
}

export default Header;