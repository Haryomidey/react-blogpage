import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAddBlog = (url) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, body };
        
        setIsAdding(true)
        
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsAdding(false);
            navigate('/');
        }
        )
    }
    return{title, author, body, isAdding, setTitle, setAuthor, setBody, setIsAdding, handleSubmit}
}

export default useAddBlog;