import { useState } from "react";

function Header() {

    const menu = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "About",
            url: "#"
        },
        {
            title: "GitHub",
            url: "#"
        }
    ];

    const [open, setOpen] = useState(false)
    
    return (
        <div className="sticky top-0 w-100 text-center">
            <h1 className="md:w-1/6 w-1/3 float-left">palmes.dev</h1>
            <div className="md:w-1/6 w-1/3 float-right">
                <button className="w-full" onClick={() => setOpen(!open)}>{ open ? "</>" : "< >" }</button>
                <ul hidden={!open}>
                    { menu.map(entry => {
                        return (
                            <li key={"nav-button-" + entry.title}>
                                <a href={entry.url}>
                                    {entry.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Header;