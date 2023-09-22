"use client";

import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <div className={`fixed top-0 left-0 p-4 z-10 flex w-1/12`}>
                <div className={styles.hamMenuBarSize}>
                    <div className="cursor-pointer" onClick={toggleNav}>
                        <div
                            className={`w-10 h-2 bg-green-600 mb-1 transform transition-transform duration-300 ${
                                isNavOpen ? "rotate-45 translate-y-3" : ""
                            } ${styles.hamMenuBarBorder}`}
                        ></div>
                        <div
                            className={`w-10 h-2 bg-green-600 mb-1 transform transition-opacity ${
                                isNavOpen ? "opacity-0" : ""
                            } ${styles.hamMenuBarBorder}`}
                        ></div>
                        <div
                            className={`w-10 h-2 bg-green-600 transform transition-transform duration-300 ${
                                isNavOpen ? "-rotate-45 -translate-y-3" : ""
                            } ${styles.hamMenuBarBorder}`}
                        ></div>
                    </div>
                </div>
                <div className="text-2xl text-white font-extrabold ml-5">
                    MENU
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-screen pt-10 bg-gray-800 text-white transform transition-transform duration-300 ${
                    styles.panelBorder
                } ${styles.panelWidth} ${
                    isNavOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <ul className="mt-6 pt-5 text-center">
                    <li
                        className={`mb-5 pt-5 pb-5 hover:bg-white hover:bg-opacity-20 font-extrabold text-xl`}
                    >
                        <a href="#welcome-page">Welcome page</a>
                    </li>
                    <li
                        className={`mb-5 pt-5 pb-5 hover:bg-white hover:bg-opacity-20 font-extrabold text-xl`}
                    >
                        <a href="#portfolio-page">Thing two</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
