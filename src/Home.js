import { useState, useEffect } from 'react';
import BlogList from './BlogList';


function Home() {

    const [blogs, setBlogs] = useState(null);
    const [isPanding, setIsPpanding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // my way with my json file
        const fetchData = async () => {

            try {
                const response = await fetch("https://next.json-generator.com/api/json/get/4ydcDgPG9");  
                const data = await response.json();
                let dataResponse = data.blogs;

                setBlogs(dataResponse);
                
                // to hide loading msg
                setIsPpanding(false);
                
                // error
                setError(null);
                
            } catch(err) {
                setIsPpanding(false);
                setError(err.message);
                // catches errors both in fetch and response.json
                // console.log(err);
            }
            
        };
        
        fetchData();

        // second way tutorial way
        // start json-server: npx json-server --watch data/db.json --port 8000
        // fetch("http://localhost:8000/blogs")
        //     .then( response => {
        //         if(!res.ok) {
        //             throw Error("Could not fetch the data for that resource");
        //         }
        //         return response.json()
        //     })
        //     .then(dataResponse => {
        //         setBlogs(dataResponse);

        //         // to hide loading msg
        //         setIsPpanding(false);

        //         // error
        //         setError(null);
        //     })
        //     .catch(err => {
        //         setIsPpanding(false);
        //         // console.log(err.message)
        //         setError(err.message);
        //     });

    }, []);

    return (
        <div className="home">

            {/* error state */}
            {  error && <div>{ error }</div>}
            {/* to show loading msg */}
            { isPanding &&  <div>Loading...</div> }

            {blogs && <BlogList 
                blogs={blogs} 
                title="Marko's blog">
            </BlogList> }
        </div>
    );
}
 
export default Home;