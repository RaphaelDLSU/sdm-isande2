import '../navbar_top.css';


export default function Navbar_top (){
    return (
    <nav className="nav">
        <div className='left-side-nav'>
            
            <ul>
                <li>
                    <h1 className='company-title'>SDM Flow</h1>
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
