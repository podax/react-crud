import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(true);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('john doe');
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
        <div className="mt-10">
            <h2>Edit Blog</h2>

            { isPending && <div>Loading...</div>}
            
            { !isPending && (
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Body:</label>
                    <textarea 
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <label>Author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="john doe">john doe</option>
                        <option value="jane doe">jane doe</option>
                    </select>
                    <button>Save</button>
                </form>
            )}
        </div>
    );
}
 
export default EditBlog;