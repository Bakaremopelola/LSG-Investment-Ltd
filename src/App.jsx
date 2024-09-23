import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './Layout/MainLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main Layout Route with Nested Child Routes */}
          <Route path='/' element={<MainLayout />}>
            {/* Child Routes */}
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
