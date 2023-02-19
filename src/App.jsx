import PersonalInfo from "./components/Personal-Info";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <div className="main bg-Alabaster p-3 w-[900px] h-[500px] flex rounded-xl">
      <Sidebar/>
      <PersonalInfo/>
    </div>
  );
}

export default App;
