import { useState } from "react";

const About = () => {

const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('marko');


    return ( 
        <div className="about">
            <h2>Add new blog</h2>
            <form>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea 
                    required
                    volue={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="marko">mario</option>
                    <option value="misa">misa</option>
                </select>

                <button>
                    Add Blog
                </button>
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}
 
export default About;