import { useState } from 'react';

const Home = () => {
    // let name = "Milan";
    const [name, setName] = useState("Milan");
    const [age, setAge] = useState(38);

    const handleClick = (e) => {
        setName("Milanko");
        setAge(39);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={ handleClick }>Click me</button>
        </div>
    );
}
 
export default Home;