import { Link } from 'react-router-dom';
// import { useParams } from "react-router-dom";

const Blogs = ({ blogs }) => {
    
    // const params = new URLSearchParams();
    // console.log(params);

    return (
        <div className="blogs">
            {
                blogs.map(blog => (
                    <div className='each-blog' key ={blog.id}>
                        <h2>{blog.title}</h2>
                        <h2 className='blog-author'>Written By: {blog.author}</h2>
                        <p>
                            {blog.body.slice(0, 200)}...
                        </p>
                        <Link to={`blog/${blog.id}`}>Read More...</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Blogs;