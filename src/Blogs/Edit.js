import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(true);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('John Doe');
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:8000/blogs/' + id)
        .then(res => res.json())
        .then(data => {
            setTitle(data.title);
            setBody(data.body);
            setAuthor(data.author);
            setIsPending(false);
        });
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            navigate('/');
        });
    }

    return (
        <div className="p-4">
            <h2 className="text-lg mb-4">Edit Blog</h2>

            { isPending && <div>Loading...</div>}
            
            { !isPending && (
                <form onSubmit={handleSubmit}>
                    <label className="block">Title:</label>
                    <input 
                        className="block w-96"
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label className="block mt-2">Body:</label>
                    <textarea 
                        className="block w-96"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        rows="5"
                    ></textarea>
                    <label className="block mt-2">Author:</label>
                    <select
                        className="block w-96"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="John Doe">John Doe</option>
                        <option value="Jane Doe">Jane Doe</option>
                    </select>
                    <button className="mt-4 p-1 text-white bg-indigo-500">Save</button>
                </form>
            )}
        </div>
    );
}
 
export default EditBlog;