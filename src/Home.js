import { useState } from 'react';
import BlogList from './BlogList';


function Home() {

    const [blogs, setBlogs] = useState([
        {
            title: "My new blog site",
            body: "lorem ipsum text...",
            outhor: "Milan",
            id: 1
        },
        {
            title: "Welcome react",
            body: "lorem ipsum text...",
            outhor: "Milanko",
            id: 2
        },
        {
            title: "my new blog site",
            body: "lorem ipsum text...",
            outhor: "Milosav",
            id: 3
        },
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="Props with destructuring"></BlogList>
        </div>
    );
}
 
export default Home;