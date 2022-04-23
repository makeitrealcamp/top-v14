
import { AuthProvider } from './context/AuthContext';
import { MainRouter } from './Routes/MainRouter';

export default function App() {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
}
