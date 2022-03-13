import { AuthContextProvider } from './Auth/context/AuthContextProvider';
import { MainRoutes } from './router/MainRouter';

function App() {
  return (
    <>
      <AuthContextProvider>
        <MainRoutes />
      </AuthContextProvider>
    </>
  );
}

export default App;
