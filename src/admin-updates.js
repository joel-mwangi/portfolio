import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminUpdatesPage from './pages/AdminUpdatesPage';  // Import the admin page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-updates" element={<AdminUpdatesPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
