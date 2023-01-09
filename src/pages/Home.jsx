// import { useEffect, useState } from "react";
import Blogs from "./Blogs";
import useFetch from "./useFetch";


const Home = () => {
    
    const { data:blogs } = useFetch("http://localhost:8000/posts");

    return (
        <div className="home">
            <h1>All Blog</h1>
            { blogs && <Blogs blogs={blogs} />}
        </div>
    )
}

export default Home;