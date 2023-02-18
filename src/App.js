
import './App.css';
import Navbar from './components/Navbar_top'
import Sidebar from './components/Sidebar';

// Homepage
export default function App() {
  return (
    
    <div className="App"> {/* Whole pagee */}
      <Navbar />  {/*Navbar_top.js */}
      <div className="page_body"> {/* Body of the page */}
        <Sidebar/> {/*Sidebar.js */}
        
      </div>
      
    </div>
  );
}


