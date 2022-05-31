import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="p-4">
            <h2 className=" text-2xl font-semibold">Page not found.</h2>
            <Link to="/" className="underline text-indigo-500">Return to homepage</Link>
        </div>
    );
}
 
export default NotFound;