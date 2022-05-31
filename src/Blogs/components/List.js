import { Link } from "react-router-dom";

const List = ({ blogs, title }) => {
    return (
        <div className="text-lg">
            <h1 className="mb-4">{ title }</h1>
            {blogs.map(blog => (
                <div className="p-4 hover:bg-gray-200" key={ blog.id }>
                    <Link to={`/blogs/${ blog.id }`}>
                        <h2>
                            <div className="text-indigo-600 text-2xl">{ blog.title }</div>
                            <small>Written by { blog.author }</small>
                        </h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default List;