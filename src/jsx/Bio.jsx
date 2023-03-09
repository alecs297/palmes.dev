import { useEffect, useState } from "react";
import { Macbook, FakeMacbook} from "./Macbook";
import Typewritter from "./Typewritter";

function Bio() {

    const email = "alex@palmes.dev";

    const stuff = [
        "doing freelance.",
        "making websites.",
        "breaking websites.",
        "designing APIs.",
        "designing databases.",
        "managing servers.",
        "coding stuff.",
        "fixing stuff.",
        "learning new stuff."
    ]

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            navigator.clipboard.writeText(email);
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }
    }, [copied]);
    
    return (
        <div className="min-h-screen py-4 w-full flex flex-wrap">
            <div className="my-auto order-2 lg:order-1 w-full lg:w-2/5 pointer-events-none lg:pointer-events-auto">
                <div className="hidden lg:block float-right w-3/4">
                    <Macbook />
                </div>
                <div className="block p-4 lg:hidden w-full">
                    <FakeMacbook />
                </div>
            </div>
            <div className="w-full order-1 lg:order-2 px-2 lg:inline-block lg:w-3/5 lg:float-right my-auto z-10">
                <div className="text-2xl md:text-4xl font-extrabold px-2 py-3 pb-5 lg:pb-3 bg-background-accent w-fit translate-y-2 -translate-x-3">
                    {
                     copied 
                     ? <span className="tracking-tight text-content-greyed">Copied to clipboard</span>
                     : <span onClick={() => setCopied(true)} placeholder="Click to select" className="text-content-primary-accent hover:text-content-secondary cursor-pointer">alex<span className="text-content-default">@</span>palmes.dev</span>
                    }
                </div>
                <div className="md:text-2xl w-full lg:w-3/4 font-base bg-background-accent-darker p-3 tracking-tight space-y-2">
                    <p className="w-full">
                        I am an engineering student in
                        <span className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-content-primary to-content-primary-accent"> Pau, France</span>
                        .
                    </p>
                    <p className="w-full">
                        With a consuming passion for <span className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-content-primary to-content-primary-accent">infosec </span>
                        and a fervent interest in <span className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-content-primary-accent to-content-primary">web development</span>,
                        <br/>
                        I spend my free time
                        <Typewritter 
                            options={{
                                endCallback: () => setCurrentWordIndex(currentWordIndex === stuff.length-1 ? 0 : currentWordIndex + 1),
                                loop: false,
                                delete: true,
                                waitMs: 1000,
                                showCursor: true
                            }}
                            className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-content-primary-accent to-content-primary"
                        >
                            {" " + stuff[currentWordIndex]}
                        </Typewritter>
                    </p>
                    <p className="w-full">
                        This website showcases my
                        <span className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-content-primary to-content-primary-accent"> portfolio </span>
                        and serves as a
                        <span className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-content-primary-accent to-content-primary"> testing ground for new ideas</span>
                        .
                    </p>
                    
                </div>
            </div>
        </div>
       
    )
}

export default Bio;