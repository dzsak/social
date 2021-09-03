import './App.css';
import Post from './Post';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PostDetails from './PostDetails';

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Post to='/posts' />
          <Switch>
            <Route path='/posts/:id'>
              <PostDetails />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
