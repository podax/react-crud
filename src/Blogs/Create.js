import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('John Doe');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            navigate('/');
        });
    }
    
    return (
        <div className="p-4">
            <h2 className="text-lg mb-4">Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label className="block">Title:</label>
                <input
                    className="block"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="block mt-2">Body:</label>
                <textarea 
                    className="block"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label className="block mt-2">Author:</label>
                <select
                    className="block"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Doe">Jane Doe</option>
                </select>
                <button className="mt-4 p-1 text-white bg-indigo-500">Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;