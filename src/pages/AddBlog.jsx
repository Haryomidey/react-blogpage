import useAddBlog from "./useAddBlog";

const AddBlog = () => {
    
    const { isAdding, setTitle, setAuthor, setBody, handleSubmit } = useAddBlog("http://localhost:8000/posts");

    return (
        <div className="add-blog">
            <form onSubmit={handleSubmit}>
                <h1>Add a New Blog</h1>
                <input type = "text" placeholder="Blog Title" required onChange={(e)=> setTitle(e.target.value)}/>
                <input type = "text" placeholder="Blog Author" required onChange={(e)=> setAuthor(e.target.value)}/>
                <textarea type="text" placeholder="Blog Body..." required onChange={(e)=> setBody(e.target.value)}></textarea>
                {!isAdding ? <button type="submit" className="add-blog-btn">ADD BLOG</button> :
                <button type="submit" className="add-blog-btn" disabled>ADDING BLOG</button>}
            </form>
        </div>
    )
}

export default AddBlog;