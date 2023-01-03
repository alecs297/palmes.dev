import Header from "./Header";
import ThreeView from "./ThreeView";
import NoContent from "./NoContent";
import Bio from './Bio';
import TechList from "./Techs";

function App() {

    return (
        <div className="bg-black p-0 m-0 h-screen w-screen overflow-x-hidden text-white">
            <div>
                <div id="anchor-start"/>
                <ThreeView/>
                <div className="w-full min-h-screen sticky top-0">
                    <Bio/>
                    <Header/>
                </div>
                <NoContent/>
                <div id="anchor-end"/>
            </div>
            <div className="z-10">
                <TechList/>
            </div>
        </div>
    );
}
export default App;
