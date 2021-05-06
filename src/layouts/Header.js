import {Link} from 'react-router-dom';
import BurgerMenu from '../components/BurgerMenu';
import Social from '../components/Social';
import LogoIcon from '../img/svg/LogoIcon';
import '../styles/Header.scss';
const Header = () =>(
    <header className="header">
        <Link to="/" className="header__logo">
            <LogoIcon />
        </Link>  
        <Social />
        <BurgerMenu/>
    </header>
)
export default Header;