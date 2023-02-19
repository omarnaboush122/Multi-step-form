import PersonalInfo from "./components/Personal-Info";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <div className="bg-Alabaster w-full h-full flex flex-col rounded-xl md:w-[900px] md:h-[500px] md:flex-row md:p-3">
      <Sidebar/>
      <PersonalInfo/>
    </div>
  );
}

export default App;
