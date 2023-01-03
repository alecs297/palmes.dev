import { useEffect } from "react";
import { useState } from "react";
import { getScrollPercent } from "../utils/scroll";
import Typewritter from "./Typewritter";

window.s = getScrollPercent;
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

    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(0);

    const updateHidden = () => {
        // ugly but necessary evil
        setHidden(document.getElementById("root").children[0].children[0].children[0].getBoundingClientRect().y < window.innerHeight*(-0.1));
    }

    useEffect(() => {
        document.getElementById("root").children[0].addEventListener("scroll", updateHidden);
        return (() => document.getElementById("root").children[0].removeEventListener("scroll", updateHidden));
    }, []);
    
    return (
        <div className={"w-3/4 select-none max-w-6xl text-center mx-auto p-5 h-6 flex items-center place-content-between absolute bottom-32 lg:bottom-48 inset-x-0 rounded-lg shadow-inner shadow-white-100 bg-black border-2 border-gray-200 z-90 transition-all duration-200 " + (hidden ? "opacity-0" : "opacity-1°0")}>
            <div>
                <h1 className="w-1/6 lg:inline">palmes.dev</h1>
                <Typewritter className="hidden lg:inline" textClassName="text-sm text-stone-400" cursorClassName="text-stone-600" options={{delete: false}}> | scroll to get started</Typewritter>
            </div>
            <div className="w-1/6">
                <ul className="bg-black border-y border-gray-800 absolute left-0 lg:left-auto -top-10 lg:w-1/6 w-full float-right -translate-y-full" hidden={!open}>
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