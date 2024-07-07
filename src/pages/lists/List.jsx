import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Navbar from "../../part/Navbar";
import Header from "../../components/header/Header";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";

const hotels = [
    {
        id: 1,
        name: "Resort Paradise",
        distance: "400m from center",
        price: 180,
        rating: 9.0,
        image: "first.jpg",
        description: "Family Room with Air conditioning",
        details: "Entire room • 1 bathroom • 35m² 2 double beds",
    },
    {
        id: 2,
        name: "Tower Street Apartments",
        distance: "500m from center",
        price: 112,
        rating: 8.9,
        image: "second.jpg",
        description: "Studio Apartment with Air conditioning",
        details: "Entire studio • 1 bathroom • 21m² 1 full bed",
    },
    {
        id: 3,
        name: "Grand Plaza Hotel",
        distance: "300m from center",
        price: 250,
        rating: 9.5,
        image: "third.jpg",
        description: "Deluxe Room with Sea View",
        details: "Entire room • 1 bathroom • 40m² 1 king bed",
    },
    {
        id: 4,
        name: "Luxury Suites",
        distance: "200m from center",
        price: 300,
        rating: 9.7,
        image: "fourth.jpg",
        description: "Luxury Suite with Pool View",
        details: "Entire suite • 2 bathrooms • 50m² 2 king beds",
    },
    {
        id: 5,
        name: "Comfort Inn",
        distance: "600m from center",
        price: 90,
        rating: 8.5,
        image: "five.jpg",
        description: "Comfort Room with Garden View",
        details: "Entire room • 1 bathroom • 25m² 1 queen bed",
    },
    {
        id: 6,
        name: "Galaxy Hotel",
        distance: "700m from center",
        price: 120,
        rating: 8.8,
        image: "sixth.jpg",
        description: "Standard Room with City View",
        details: "Entire room • 1 bathroom • 30m² 1 double bed",
    },
];

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state?.destination || "");
    const [date, setDate] = useState(location.state?.date || [{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state?.options || { adult: 1, children: 0, room: 1 });
    const [sort, setSort] = useState("random");
    const [filteredHotels, setFilteredHotels] = useState([...hotels]);

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSort(value);
        if (value === "priceAsc") {
            setFilteredHotels([...hotels].sort((a, b) => a.price - b.price));
        } else if (value === "priceDesc") {
            setFilteredHotels([...hotels].sort((a, b) => b.price - a.price));
        } else if (value === "newest") {
            setFilteredHotels([...hotels].sort((a, b) => b.id - a.id));
        } else {
            setFilteredHotels([...hotels].sort(() => Math.random() - 0.5));
        }
    };

    return (
        <div>
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input
                                placeholder={destination}
                                type="text"
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.adult}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="lsOptionInput"
                                        placeholder={options.children}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={options.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                        <div className="lsItem">
                            <label>Sort by</label>
                            <select value={sort} onChange={handleSortChange}>
                                <option value="random">Random</option>
                                <option value="priceAsc">Price (Low to High)</option>
                                <option value="priceDesc">Price (High to Low)</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>
                    </div>
                    <div className="listResult">
                        {filteredHotels.map((hotel) => (
                            <SearchItem key={hotel.id} hotel={hotel} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
