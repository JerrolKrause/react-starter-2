import { PrimeReactProvider } from 'primereact/api';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';

import { HomeRoute } from './routes/home/Home.route';
import { UsersRoute } from './routes/users/Users.route';

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <HelmetProvider>
          <Helmet>
            <title>React Starter App - Home</title>
            <meta name="description" content="Starter Application for React projects" />
          </Helmet>
        </HelmetProvider>

        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/users" element={<UsersRoute />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
