import React, { useState } from 'react';
import './navbar.css';

function Navbar({ onViewChange }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const changeView = (view) => {
        onViewChange(view); 
        setDropdownOpen(false); 
    };

    return (
        <div className="container">
            <span className="page">Books</span>
            <span className="dropdown" onClick={toggleDropdown}>
                View
                {dropdownOpen && (
                    <ul className="dropdown-list">
                        <li onClick={() => changeView('List View')}>List View</li>
                        <li onClick={() => changeView('Grid View')}>Grid View</li>
                    </ul>
                )}
            </span>
        </div>
    );
}

export default Navbar;
