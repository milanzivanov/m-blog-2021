import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
              <Route path="/">
                  <Home></Home>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );

}


export default App;
