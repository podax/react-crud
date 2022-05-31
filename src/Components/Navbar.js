import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="p-4 flex justify-start gap-x-3 border-b-2 border-indigo-500">
            <h2 className="mr-auto text-xl font-semibold uppercase tracking-widest">Blogs</h2>
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </nav>
    );
}
 
export default Navbar;