import { useEffect, useRef, useState } from "react";

function updateText(index, direction=1, options={}) {
    const default_options = {
        target: "",
        setTarget: ()=>{},
        endCallback: ()=>{},
        ref: null,
        writeMs: 50,
        deleteMs: 30,
        waitMs: 3000,
        waitDeleteMs: 500,
        delete: true,
        loop: true
    }
    options = {...default_options, ...options}

    if (!options.ref || !options.ref.current) return

    if (direction === 1) {
        index++;
    } else if (options.delete) {
        index--;
    }




    if (index > options.target.length) {
        if (options.delete) setTimeout(() => {
            updateText(index, -1, options)
        }, options.waitMs)

        else options.endCallback()
    } else if (index < 0) {
        if (options.loop) setTimeout(() => {
            updateText(index, 1, options)
        }, options.waitDeleteMs)

        else options.endCallback()
    } else {
        options.setTarget(options.target.slice(0, index));
        setTimeout(() => {
            updateText(index, direction, options)
        }, direction === 1 ? options.writeMs : options.deleteMs)
    }

}

function Typewritter({children, className, options={}}) {

    const [currentText, setCurrentText] = useState(null)
    const ref = useRef()

    if (typeof children !== "string") throw new Error("Children must be strings");

    useEffect(() => {
        if (currentText !== children) updateText(0, 1, {
            ...options,
            ref: ref,
            target: children,
            setTarget: setCurrentText,
        })

    }, [children])

    return (
        <>
            <span ref={ref} className={className}>{currentText}</span>
            <span className="animate-blink text-cyan-300">|</span>
        </>
    )
}

export default Typewritter;