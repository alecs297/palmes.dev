import { useState } from "react";
import Typewritter from "./Typewritter";

function Bio() {

    const stuff = [
        "do freelance.",
        "make websites.",
        "break websites.",
        "design APIs.",
        "code stuff."
    ]

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    
    return (
        <div className="w-full md:w-1/2 h-screen mx-4 my-16 md:m-0 md:grid grid-cols-1 sticky top-0 md:place-content-evenly z-10">
            <div className="place-self-center px-3">
                <h2 className="text-5xl md:text-7xl font-extrabold py-3 pb-5 bg-stone-900 w-fit">Hello world.</h2>
                <div className="md:text-3xl font-bold bg-stone-1000 p-3 translate-x-3 -translate-y-3">
                    <p>
                        My name is
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 to-cyan-500"> Alex, </span>
                    </p>
                    <p>
                        I am an engineering student in
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-200 to-cyan-500"> Pau, France.</span>
                    </p>

                    <p>
                        On my free time, I
                        <Typewritter 
                            options={{
                                endCallback: () => setCurrentWordIndex(currentWordIndex === stuff.length-1 ? 0 : currentWordIndex + 1),
                                loop: false
                            }}
                            className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-cyan-200"
                        >
                            {" " + stuff[currentWordIndex]}
                        </Typewritter>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Bio;