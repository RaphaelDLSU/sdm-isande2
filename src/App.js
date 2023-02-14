import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar_top'
import Sidebar from './components/Sidebar';


export default function App() {
  return (
    
    <div className="App">
      <Navbar />
      <div className="page_body">
        <Sidebar/>
        
      </div>
      
    </div>
  );
}


