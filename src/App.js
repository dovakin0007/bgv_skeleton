import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { FileProvider } from './FileContext';
import FileUpload from './Pages/FileUpload';
import FileView from './Pages/FileView';
function App() {
  return (
    <FileProvider>
      <Router>
        <div>
          <nav>
          <ul>
          <li>
                <Link to="/upload">Upload Files</Link>
              </li>
              <li>
                <Link to="/view">View Files</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path = "/upload" element= {<FileUpload/>} />
           <Route path = "/view" element = {<FileView/>}/>
          </Routes>
        </div>
      </Router>
    </FileProvider>
  );
}

export default App;
