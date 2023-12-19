import './App.css';
import {Route, Routes} from "react-router-dom"
import WebDL_I from './components/WebDL_I';
import WebDL_II from './components/WebDL_II';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* eslint-disable-next-line */}
        <Route path='/web1' element={<WebDL_I/>}/>
        {/* eslint-disable-next-line */}
        <Route path='/web2' element={<WebDL_II/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
