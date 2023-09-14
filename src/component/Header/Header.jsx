
import { Link } from 'react-router-dom';
import logo from '../../images/Ema-John.png';
import './header.css';

const Header = () => {
    return (
        <header id='header'>
            <nav className="nav">
                <div className="nav_wrap">
                <div className='page_logo'>
                <img src={logo} alt="" className='img-fluid' />
                </div>
                <ul className='header_menu'>
                        <li className="nav-item"><Link to={'/order'} className="nav-link">Order</Link></li>
                        <li className="nav-item"><Link to={'/review'} className="nav-link">Order Review</Link></li>
                        <li className="nav-item"><Link to={'/inventory'} className="nav-link">Manage Inventoary</Link></li>
                        <li className="nav-item"><Link to={'/login'} className="nav-link">LogIn</Link></li>
                </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;