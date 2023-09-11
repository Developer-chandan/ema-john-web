
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
                        <li className="nav-item"><a href="" className="nav-link">Order</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Order Review</a></li>
                        <li className="nav-item"><a href="" className="nav-link">Manage Inventoary</a></li>
                        <li className="nav-item"><a href="" className="nav-link">LogIn</a></li>
                </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;