import Header from "./Header";
import ThreeView from "./ThreeView";
import NoContent from "./NoContent";
import Welcome from './Welcome';
import Bio from './Bio';
import TechList from "./Techs";
import ProjectsContainer from "./Projects";

function App() {

    return (
        <div className="bg-background-default p-0 m-0 h-screen w-screen overflow-x-hidden text-content-default">
            <div>
                <div id="anchor-start"/>
                <ThreeView/>
                <div className="w-full min-h-screen sticky top-0">
                    <Welcome/>
                    <Header/>
                </div>
                <NoContent/>
                <NoContent/>
                <div id="anchor-end"/>
            </div>
            <div className="w-full h-min-screen sticky z-10">
                <Bio/>
                <TechList/>
                <ProjectsContainer/>
            </div>
        </div>
    );
}
export default App;
