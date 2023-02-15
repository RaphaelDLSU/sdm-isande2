import '../navbar_top.css';
import Logo from '../logo.jpg';
import reactLogo from '../logo.svg';


export default function Navbar_top (){
    return (
    <nav className="nav">
        <div className='left-side-nav'>
            <ul>
                <li>
                    <div className='company-part'>
                        <img src = {Logo} alt={reactLogo}></img>
                        <h1 className='company-title'>SDM Flow</h1>
                    </div>
                    
                        <a>About us</a>
                        <a>Lessons</a>
                        <a>Faculty</a>
                        <a>Contact us</a>
                </li>
            </ul>
        </div>
        <a className='user-title'>Student</a>
    </nav>  
    );
}
