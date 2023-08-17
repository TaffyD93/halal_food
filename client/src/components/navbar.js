import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Navbar() {
    
    return (
        <nav className="nav">
            <div className="site">
            <Link to="/home" className="site-name">Halal Food Finder</Link>
            <p className="est">Est. 2023</p>
            </div>
            <ul>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/restaurant">Restaurants</CustomLink>
                <CustomLink to="/map">Map</CustomLink>
                <CustomLink to="/recommendation">Recommendation</CustomLink>
                <CustomLink to="/sign_in">Sign In</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}