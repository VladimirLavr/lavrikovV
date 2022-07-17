import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {MainContainer} from "./components/MainContainer/MainContainer";

import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
      <Sidebar/>
      <MainContainer/>
    </div>
  );
}

export default App;
