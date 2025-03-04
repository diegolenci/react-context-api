import { Link, NavLink } from "react-router-dom";

export default function MainNav() {
    return (
        <nav>
            <Link to="/">Home Page</Link>
            <NavLink to="/chiSiamo">Chi siamo?</NavLink>
            <NavLink to="/list">Lista post</NavLink>
        </nav>
    )
}