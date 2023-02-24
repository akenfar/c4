import { useRef } from "react";
import { FaBars, FaTimes,FaSearch , FaRegMoon, FaRegSun} from "react-icons/fa";
import "../Style/UserNavbar.css";
// import logo from '../images/logo.jpg';
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
import { useState } from "react";
function Navbar() {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<>
		<header>
			<img src={logo} alt="log" className="logo" />
					<nav ref={navRef}>
						<ul className="list">
							<li  className="" href="/#">Categories</li>
							<li href="/#">About</li>
						</ul>
						<div className='form_search'>
							<FaSearch color={'black'} size={18} className='search_icon' />
						    <input type="text" placeholder="Search..." />
						</div>
							<div className="nav-icons" 
							style={{marginLeft:'-90px'}}
							>
							
							<FaRegMoon size={20}
							color={'black'}
							/>			
							<FaShoppingCart size={22} 
							color={'black'}
							style={{marginLeft:'10px'}} 

							/>				
							</div>
						<div className="authantification">
									<button className="login">Login</button>
									<button className="sign-up" variant="success">Sign Up</button>
						</div> 
						
						<button
							className="nav-btn nav-close-btn"
							onClick={showNavbar}>
							<FaTimes />
						</button>
					</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>

		</>
	);
}

export default Navbar;
