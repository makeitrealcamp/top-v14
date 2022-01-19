import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { Users } from './pages/Users';
import { Posts } from './pages/Posts';
import { PostList } from './components/PostList';
import { PostDetails } from './components/PostDetails';
import { UserDetails } from './components/Users/UserDetails';
import { UsersContainer } from './components/Users/UsersContainer';

import { Tasks } from './pages/Tasks';



const user = 'user'

function App() {
  return (
    <Router>
      <Navigation />
      {/* <Sidebar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='users' element={<Users />} >
          <Route path='' element={<UsersContainer />} />
          <Route path=':id' element={<UserDetails />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='posts' element={<Posts />} >
          <Route path='' element={<PostList />} />
          <Route path=':id' element={<PostDetails />} />
        </Route>
        <Route path='tasks' element={<Tasks />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <footer> My FOOTER</footer>
    </Router>
  );
}

export default App;