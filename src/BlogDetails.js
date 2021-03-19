import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data, isPending, error} = useFetch(
        "https://next.json-generator.com/api/json/get/4ydcDgPG9"
    );
    // // const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);
    // console.log(data);

    if (!data) {
        return <div/>
    }
    
    const blog = data.filter(p => p.id.toString() === id)[0];
    
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <div> { blog.body } </div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
