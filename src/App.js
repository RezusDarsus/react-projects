import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Page/Home';
import List from './pages/lists/List';
import Tav from './components/TAV/Tav';
import Navbar from './part/Navbar';
import LoginModal from "./modal/LoginModal";
import SearchBar from './components/searchbar/SearchBar';
import PromoSection from './components/promotion/PromoSection';
import FeaturesSection from './feature/FeaturesSection';
import Footer from './part/Footer';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import ContactUs from './components/contact/ContactUs';
import PrivacyPolicy from './components/privacy/PrivacyPolicy';

function App() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <BrowserRouter>
            <Navbar openModal={() => setModalOpen(true)} />
            <Routes>
                <Route path="/" element={
                    <>
                        <SearchBar />
                        <Slider />
                        <PromoSection />
                        <FeaturesSection />
                        <Footer />
                        <Home openModal={() => setModalOpen(true)} />
                    </>
                } />
                <Route path="/hotel" element={
                    <>
                        <List openModal={() => setModalOpen(true)} />
                    </>
                } />
                <Route path="/hotel/:id" element={
                    <>
                        <Tav openModal={() => setModalOpen(true)} />
                    </>
                } />
                <Route path="/hotel/contacts" element={<ContactUs />} />
                <Route path="/profile" element={<ContactUs />} /> {}
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
            <LoginModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </BrowserRouter>
    );
}

export default App;
