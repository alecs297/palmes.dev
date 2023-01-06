import { useState } from "react";
import Macbook from "./Macbook";
import Typewritter from "./Typewritter";

function Bio() {

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
    
    return (
        <div className="min-h-screen w-full flex flex-wrap">
            <div className="my-auto order-2 lg:order-1 w-full lg:w-2/5 pointer-events-none lg:pointer-events-auto">
                <div className="lg:float-right w-full lg:w-3/4">
                    <Macbook />
                </div>
            </div>
            <div className="w-full order-1 lg:order-2 px-2 lg:inline-block lg:w-3/5 lg:float-right my-auto z-10">
                <h2 className="text-5xl md:text-7xl font-extrabold px-2 py-3 pb-5 bg-background-accent w-fit translate-y-2 -translate-x-3"><code className="text-content-secondary">$</code> whoami</h2>
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