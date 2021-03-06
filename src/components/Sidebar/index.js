import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logoS from '../../assets/images/CP.svg'
import name from '../../assets/images/Subtitle.png'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to='/'>
            <img src={logoS} alt="logo" />
            <img className = 'sub-logo' src={name} alt="name" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link"  to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a 
                    target="_blank" 
                    rel="norefferrer" 
                    href="https://www.linkedin.com/in/chris-jpark">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank" 
                    rel="norefferrer" 
                    href="https://www.github.com/chris-jpark">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar 