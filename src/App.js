
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from './components/createBlog/CreateBlog';
import BlogDetails from './components/Blog/BlogDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <CreateBlog/>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
