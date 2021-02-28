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

    return (
        <div className="home">
            <BlogList blogs={blogs} title="Props with destructuring"></BlogList>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Marko")} title="Markov blog"></BlogList>
        </div>
    );
}
 
export default Home;