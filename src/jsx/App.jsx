import Header from "./Header";
import ThreeView from "./ThreeView";
import NoContent from "./NoContent";
import Bio from './Bio';

function App() {

    return (
        <div className="bg-black p-0 m-0 h-screen w-screen overflow-x-hidden text-white">
            <div id="anchor-start"/>
            <ThreeView/>
            <NoContent/>
            <Header/>
            <NoContent size="1/4"/>
            <Bio/>
            <NoContent/>
            <NoContent className='sticky'/>
            <div id="anchor-end"/>
        </div>
    );
}
export default App;
