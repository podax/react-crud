import { Link } from "react-router-dom";

const List = ({ blogs, title }) => {
    return (
        <div className="p-4">
            <h1>{ title }</h1>
            {blogs.map(blog => (
                <div className="my-6" key={ blog.id }>
                    <Link to={`/blogs/${ blog.id }`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default List;