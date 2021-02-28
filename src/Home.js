import { useState } from 'react';
import BlogList from './BlogList';


function Home() {

    const [blogs, setBlogs] = useState([
        {
            title: "My new blog site",
            body: "lorem ipsum text...",
            author: "Marko",
            id: 1
        },
        {
            title: "Welcome react",
            body: "lorem ipsum text...",
            author: "Milanko",
            id: 2
        },
        {
            title: "my new blog site",
            body: "lorem ipsum text...",
            author: "Milosav",
            id: 3
        },
    ]);

    // Full React Tutorial #13 - Functions as Props
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList 
                blogs={blogs} 
                title="Marko's blog" 
                handleDelete={handleDelete}>
            </BlogList>
        </div>
    );
}
 
export default Home;