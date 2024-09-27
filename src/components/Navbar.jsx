import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">

            <ul className="navbar-list">

                <li className="navbar-item">
                    <NavLink className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')} to='/'>
                        <button className="navbar-link" data-nav-link>About</button>
                    </NavLink>
                </li>

                <li className="navbar-item">
                    <NavLink className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')} to='/Resume'>
                        <button className="navbar-link" data-nav-link>Resume</button>
                    </NavLink>
                </li>

                <li className="navbar-item">
                    <NavLink className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')} to='/Portfolio'>
                        <button className="navbar-link" data-nav-link>Portfolio</button>
                    </NavLink>
                </li>

                <li className="navbar-item">
                    <NavLink className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')} to='/Contact'>
                        <button className="navbar-link" data-nav-link>Contact</button>
                    </NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar