import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/NavBar/Navbar';
import './App.scss';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  const location = useLocation();
  const isHome = (location.pathname === '/home');

  if (isHome) {
    return <Navigate to="/" />;
  }

  return (
    <div className="App">
      <div className="flex-app">
        <div>
          <Navbar />

          <main>
            <Outlet />
          </main>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
