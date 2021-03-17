import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {

    // my url
    const {data: blogs, isPending, error} = useFetch(
        "https://next.json-generator.com/api/json/get/4ydcDgPG9"
    );
    // const {data, isPending, error} = useFetch("https://next.json-generator.com/api/json/get/4ydcDgPG9");
    // tutorial url
    // const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">

            {/* error state */}
            {  error && <div>{ error }</div>}
            {/* to show loading msg */}
            { isPending &&  <div>Loading...</div> }

            {blogs && <BlogList 
                // blogs={data} 
                blogs={blogs} 
                title="Marko's blog">
            </BlogList> }
        </div>
    );
}
 
export default Home;