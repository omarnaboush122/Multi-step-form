import PersonalInfo from "./components/Personal-Info";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <div className="bg-Alabaster w-full h-full flex flex-col rounded-xl md:w-[90vw] md:h-[550px] md:flex-row md:justify-between md:p-3 lg:w-[900px]" >
      <Sidebar/>
      <PersonalInfo/>
    </div>
  );
}

export default App;
