import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav className="navbar bg-info px-20">
            <Link to="/" class="navbar-brand mx-3">Law4Her</Link>
            <div className="nav">
                <Link to="/resources" className="nav-link text-light font-weight-bold fs-6">Legal Resources</Link>
                <Link to="/case" className="nav-link text-light font-weight-bold fs-6">Case Studies</Link>
                <Link to="/workshop" className="nav-link text-light font-weight-bold fs-6">Empowerment workshop</Link>
                <Link to="/actions" className="nav-link text-light font-weight-bold fs-6">Legal Actons</Link>
                <Link to="/about" className="nav-link text-light font-weight-bold fs-6">About us</Link>

            </div>
        </nav>
    )
}

export default Nav;