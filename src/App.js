import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'; 
import LocationPage from './pages/LocationPage/LocationPage';
import ServicesPage from './pages/ServicesPage/ServicesPage'; // ✅ Ensure this import exists
import RequestedPage from './pages/RequestedPage/RequestedPage'; // Corrected folder structure
import MainPage from './pages/MainPage/MainPage';
import PostBusinessPage from './pages/PostBusinessPage/PostBusinessPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { LocationProvider } from './pages/LocationPage/LocationContext';
import { ServiceProvider } from './pages/ServicesPage/ServiceContext'; // Ensured correct path
import BusinessDetailsPage from './pages/BusinessDetailsPage/BusinessDetailsPage';


function App() {
  return (
    <Router>
      <LocationProvider>
        <ServiceProvider>
          <div className="app-container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/locations" element={<LocationPage />} />
              <Route path="/services" element={<ServicesPage />} /> {/* ✅ Add Services Route */}
              <Route path="/requested" element={<RequestedPage />} /> {/* Ensuring consistency */}
              <Route path="/main" element={<MainPage />} />
              <Route path="/post-business" element={<PostBusinessPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/business/:id" element={<BusinessDetailsPage />} />
            </Routes>
          </div>
        </ServiceProvider>
      </LocationProvider>
    </Router>
  );
}

export default App;
