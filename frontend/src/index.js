import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';
import ViewPage from './landing_page/view/ViewPage';


import NotFound from './landing_page/NotFound';
import Signup from './landing_page/signup/Signup';
import Login from './landing_page/signup/Login';
import InternshipForm from './landing_page/internship/InternshipForm';
import ReviewPage from './landing_page/review/ReviewPage';
// Layout
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import AdminLogin from './landing_page/admin/AdminLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <main style={{ minHeight: "80vh" }}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path="/view" element={<ViewPage />} />
      
         <Route path='/support' element={<SupportPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminLogin />} />
          <Route path='/review' element={<ReviewPage />} /> 
        <Route path="/internship" element={<InternshipForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);
