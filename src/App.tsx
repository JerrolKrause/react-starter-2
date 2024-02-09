import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { HomeRoute } from "./routes/home/Home.route";

function App() {
  return (
    <Router>
      <HelmetProvider>
        <Helmet>
          <title>React Starter App - Home</title>
          <meta
            name="description"
            content="Starter Application for React projects"
          />
        </Helmet>
      </HelmetProvider>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
