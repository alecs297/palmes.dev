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
                {/* <NoContent/> */}
                <div className='h-screen w-full relative flex flex-col place-content-center'>
                    <span className='bg-gray-900 w-max px-3'><h1 className='w-full uppercase text-5xl font-black my-5 bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-yellow-400'>Under construction</h1></span>
                    <p className='text-xl px-14 font-bold py-5 bg-gray-800 w-1/4'>Come back soon.</p>
                </div>
            </div>
        </div>
    );
}
export default App;
