import { useState } from 'react';

const Home = () => {

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
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.outhor }</p>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Home;