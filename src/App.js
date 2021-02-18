import './App.css';

function App() {

  const title = "Welcome to the new blog";
  const likes = 38;
  // const person = {
  //   name: 'milan',
  //   age: 38
  // }
  const link = "http://google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
        <p>{19}</p>
        <p>{"Hello Milan"}</p>
        <p>{1,2,3,4,5}</p>
        <p>{(Math.random() * 100).toFixed()}</p>
        <a href={link}>Google site</a>
      </div>
    </div>
  );
}


export default App;
