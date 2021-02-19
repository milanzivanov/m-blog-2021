import Navbar from './Navbar';
import Home from './Home';

// one way
// function App() {

//   return (
//     <div className="App">
//       <Navbar></Navbar>
//       <div className="content">
//         <Home></Home>
//       </div>
//     </div>
//   );
// }

// another way
const App = () => {

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );

}


export default App;
