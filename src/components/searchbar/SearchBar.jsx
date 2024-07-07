import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './searchbar.css';

const SearchBar = () => {
    const [destination, setDestination] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [tripType, setTripType] = useState('leisure');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log({
            destination,
            checkInDate,
            checkOutDate,
            guests,
            tripType,
        });
        navigate('/hotel');
    };

    return (
        <div className="search-bar-container">
            <h1>Soooo many hotels and apartments!</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Check-in"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Check-out"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                />
                <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                >
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                </select>
                <div className="trip-type">
                    <label>
                        <input
                            type="radio"
                            value="leisure"
                            checked={tripType === 'leisure'}
                            onChange={(e) => setTripType(e.target.value)}
                        />
                        Leisure
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="business"
                            checked={tripType === 'business'}
                            onChange={(e) => setTripType(e.target.value)}
                        />
                        Business
                    </label>
                </div>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
