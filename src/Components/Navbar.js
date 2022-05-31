import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="pr-4">Home</Link>
            <Link to="/create">New Blog</Link>
        </nav>
    );
}
 
export default Navbar;