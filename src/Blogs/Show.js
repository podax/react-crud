import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../Composables/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        });
    }

    return (
        <div className="p-4">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2>
                        <div className="text-indigo-600 text-2xl">{ blog.title }</div>
                        <small>Written by { blog.author }</small>
                    </h2>
                    <div className="my-4">{ blog.body }</div>

                    <Link to={`/blogs/${blog.id}/edit`} className="mr-2 p-1 bg-green-500">Edit</Link>
                    <button onClick={handleDelete} className="mr-2 p-1 bg-red-500">Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;