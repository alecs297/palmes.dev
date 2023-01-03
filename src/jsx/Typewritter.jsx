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
        delete: false,
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

/**
 * Available options
 * 
 * writeMs, deleteMs, waitMs, waitDeleteMs, delete, loop, endCallback, showCursor
 * 
 */
function Typewritter({children, className="", textClassName, cursorClassName="text-content-primary-accent/80", options={}}) {

    const [currentText, setCurrentText] = useState(null)
    const ref = useRef()

    if (typeof children !== "string") throw new Error("Children must be strings");


    useEffect(() => {
        const args = {
            ...options,
            ref: ref,
            target: children,
            setTarget: setCurrentText,
        }
        if (currentText !== children) updateText(0, 1, args)
        return () => {args.ref = null}
    // eslint-disable-next-line
    }, [children])

    return (
        <span className={"inline " + className}>
            <span ref={ref} className={textClassName}>{currentText}</span>
            <span className={"animate-blink " + ((currentText === children && !options?.loop && !options.showCursor) ? "invisible " : "visible ") + cursorClassName}>|</span>
        </span>
    )
}

export default Typewritter;