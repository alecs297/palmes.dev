import { useEffect } from "react";
import { useState } from "react";

const messages = [
    "Website is loading...",
    "Please bare with me...",
    "Hang in there...",
    "It really isn't that big of a website...",
    "I'm not even using a framework...",
    "I'm just using React...",
    "And a little bit of Three.js...",
    "And a little bit of Tailwind...",
    "And the Devicon font...",
    "You know, the one that has all the logos...",
    "Your internet connection is probably slow...",
    "Your device might not be that powerful...",
    "Try refreshing the page, maybe it'll work...",
    "I'm out of loading messages",
    "Loading..."
]

function LoadingScreen({loaded}) {

    const [timer, setTimer] = useState(0);

    useEffect(()=> {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 5000)

        return (() => clearInterval(interval));
    }, [])

    return (
        <div hidden={loaded} className='h-screen w-screen z-50 pointer-events-none'>
            <div className='flex items-center justify-center text-3xl text-white h-full'>
                {messages.length > timer ? messages[timer] : messages[messages.length - 1]}
            </div>
        </div>
    )
}

export default LoadingScreen;