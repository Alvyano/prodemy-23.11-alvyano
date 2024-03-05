import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRoute from './administrator/AdminRoute';
import CustomerPage from './pages/CustomerPage';

function App() {
  return (
    <div className="p-2 text-black bg-contain bg-no-repeat bg-amber-50 min-h-screen">
      <Routes>
        <Route path='/*' element={<CustomerPage />} />
        <Route path='/admin/*' element={<AdminRoute />} />
      </Routes>
    </div>
  )
}

export default App