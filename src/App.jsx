import { useState } from 'react';
import './App.css';
import { explorer } from './data/folderData';
import Folders from './components/Folders';


function App() {
  const [explorerData, setExplorerData] = useState(explorer);


  return (
  <div className="App">
    <Folders explorer={explorerData} />
  </div>
  );
}

export default App;