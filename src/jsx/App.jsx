import { useRef } from 'react'

import Header from "./Header";
import ThreeView from "./ThreeView";
import NoContent from "./NoContent";

function App() {

    const origin = useRef();

    return (
        <div className="bg-black p-0 m-0 h-screen w-screen overflow-x-hidden text-white">
            <div ref={origin}></div>
            <div className="mx-auto h-full">
                <ThreeView origin={origin}/>
                <NoContent/>
                <Header origin={origin}/>
                <div className="w-full md:w-1/2 h-screen m-4 md:m-0 md:grid grid-cols-1 relative md:place-content-evenly z-10">
                    <div className="place-self-center">
                        <p className="text-7xl font-extrabold">Hello world</p>
                        <p className="text-3xl font-bold">I am</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
