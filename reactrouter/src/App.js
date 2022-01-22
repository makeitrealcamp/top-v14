

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer } from './pages/Footer';
import { TasksProvider } from './context/TasksProvider';
import { MainRoutes } from './router/MainRoutes';
import { AuthContextProvider } from './context/authContext';


function App() {
  return (<>
    <AuthContextProvider>
      <TasksProvider>
        <MainRoutes />
        <Footer />
      </TasksProvider>
    </AuthContextProvider>

  </>
  );
}

export default App;