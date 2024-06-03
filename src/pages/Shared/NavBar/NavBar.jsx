import { Link, NavLink } from "react-router-dom";
import logoImg from '../../../assets/images/TourVisor.png';


const NavBar = () => {


    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
          elem?.blur();
        }
      };

    const links = <>
        <li><NavLink to="/" onClick={handleClick}>Home</NavLink></li>
        <li><NavLink to="/community" onClick={handleClick}>Community</NavLink></li>
        <li><NavLink to="/blogs" onClick={handleClick}>Blogs</NavLink></li>
        <li><NavLink to="/aboutUs" onClick={handleClick}>About Us</NavLink></li>
        <li><NavLink to="/contactUs" onClick={handleClick}>Contact Us</NavLink></li>
        
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn-accent text-xl">
                        <img src={logoImg} alt="" className="size-16" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                        <Link to="/login" className="btn btn-sm btn-accent">LogIn</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;