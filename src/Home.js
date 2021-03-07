import { useState, useEffect } from 'react';
import BlogList from './BlogList';


function Home(props) {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {

        // one way
        // const fetchData = async () => {
        //     const response = await fetch("http://localhost:8000/blogs");
        //     const data = await response.json();
        //     console.log(data);
        //     setBlogs(data);
        // };
        // fetchData();

        // second way 
        fetch("http://localhost:8000/blogs")
            .then( res => res.json())
            .then(data => {
                console.log(data);
                setBlogs(data);
            });

    }, []);

    return (
        <div className="home">
            {blogs && <BlogList 
                blogs={blogs} 
                title="Marko's blog">
            </BlogList> }
        </div>
    );
}
 
export default Home;