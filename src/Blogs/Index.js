import useFetch from "../Composables/useFetch";
import List from "./components/List";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="p-4">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <List title="All Blogs" blogs={blogs} />}
        </div>
    );
}
 
export default Home;