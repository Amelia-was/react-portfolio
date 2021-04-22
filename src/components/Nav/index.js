import React from 'react';

function Nav(props) {
    const { navLinks, currentPage, setCurrentPage } = props;
    return (
        <nav>
            <ul>
                {navLinks.map(link => (
                    <li>
                        <h2 
                        key={link}
                        className={`${currentPage === link && 'navActive'}`} 
                        onClick={() => {
                            setCurrentPage(link)
                        }}>{link}</h2>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;