import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClassProvider } from './context/ClassContext';
import { ClassListPage } from './pages/ClassListPage';
import { ClassDetailPage } from './pages/ClassDetailPage';
import './App.css';

function App() {
  return (
    <ClassProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/classes" replace />} />
          <Route path="/classes" element={<ClassListPage />} />
          <Route path="/detail/:id" element={<ClassDetailPage />} />
          <Route path="*" element={<Navigate to="/classes" replace />} />
        </Routes>
      </Router>
    </ClassProvider>
  );
}

export default App;
