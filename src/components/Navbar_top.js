import '../navbar_top.css';
import Logo from '../logo.png';
import reactLogo from '../logo.svg';

export default function Navbar_top (){
    return (
    <nav className="nav">
        <div className='left-side-nav'>
            <ul>
                <li>
                        <img className='company-title' src = {Logo} alt={reactLogo}></img>    
                        <a>About Us</a>
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
