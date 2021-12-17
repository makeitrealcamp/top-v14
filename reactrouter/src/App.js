import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { Users } from './pages/Users';



const user = 'user'

function App() {
  return (

    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={`users/*`} element={<Users />} >
          {/* <Route path='1' element={<h2>'children user'</h2>} /> */}
        </Route>
        <Route path='about' element={<About />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;