import Header from "./Header";
import ThreeView from "./ThreeView";
import Content from "./Content";

function App() {
    return (
      <div className="bg-black p-0 m-0 h-screen w-screen overflow-x-hidden text-white">
        <div className="container mx-auto">
          <Header/>
          <ThreeView/>
          <Content/>
        </div>
      </div>
    );
}
export default App;
