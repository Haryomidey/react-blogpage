import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
// import useAddBlog from "./useAddBlog";
import { useNavigate } from 'react-router-dom';

const ReadBlog = () => {

    const { id } = useParams();
    const { data: blogs } = useFetch('http://localhost:8000/posts/' + id);
    // const { title, author, body, setTitle, setAuthor, setBody } = useAddBlog('http://localhost:8000/posts/' + id);
    const navigate = useNavigate()
    
    const handleDelete = () => {
        fetch('http://localhost:8000/posts/' + id, {
            method: "DELETE"
        }).then(() => {
            navigate('/');
        })
    }

    const handleEditBlog = () => {
        // console.log(blogs)
        navigate('/addblog');
        // setBody(blogs.title)
        // console.log(title)
    }

    return (
        
        <div className="read-blog">
            <p className="blog-body">
                {blogs && blogs.body}
            </p>
            <div className="edit-delete-btn">
                <i className="fa-solid fa-pen-to-square" onClick={handleEditBlog}></i>
                <button type ="button" onClick={handleDelete}>DELETE BLOG</button>
            </div>
        </div>
    )
}


export default ReadBlog;