import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './About';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

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
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/about">
                  <About></About>
              </Route>
              <Route path="/blogs/:id">
                  <BlogDetails></BlogDetails>
              </Route>
              <Route path="*">
                  <NotFound></NotFound>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;
