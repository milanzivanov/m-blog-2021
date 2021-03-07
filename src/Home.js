import { useState, useEffect } from 'react';
import BlogList from './BlogList';


function Home(props) {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {

        // my way with my json file
        const fetchData = async () => {
            const response = await fetch("https://next.json-generator.com/api/json/get/4ydcDgPG9");
            const data = await response.json();
            let dataResponse = data.blogs;
            console.log(dataResponse);
            setBlogs(dataResponse);
        };
        fetchData();

        // second way 
        // fetch("http://localhost:8000/blogs")
        //     .then( res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setBlogs(data);
        //     });

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