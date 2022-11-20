import Main from './components/Main';
import {Characters} from './components/Characters';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/characters' element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;