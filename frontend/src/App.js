import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import NotFoundPage from './Pages/NotFoundPage';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<HomePage/>} path=''/>
          <Route element={<ProfilePage/>} path='profile/:id/'/>
          <Route element={<NotFoundPage/>} path='*' /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
