
function Welcome() {
    
    return (
        <div className="w-full absolute top-0 lg:top-48 lg:w-1/2 mx-4 my-16 lg:m-0 lg:grid grid-cols-1 lg:place-content-evenly z-10">
            <div className="place-self-center px-3">
                <h2 className="text-5xl md:text-7xl font-extrabold py-3 pb-5 bg-background-accent w-fit">Hello world.</h2>
                <div className="md:text-3xl font-bold bg-background-accent-darker p-3 translate-x-3 -translate-y-3">
                    <p className="mb-2">
                        My name is
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-content-primary to-content-primary-accent"> Moldovan Alexandru</span>
                        .
                    </p>
                    <p>
                        Looks like you've found my website,
                    </p>
                    <p>
                        feel free to 
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-content-primary-accent to-content-primary"> take a look around</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;