"use client";

import React, { useState } from "react";
import styles from "@/styles/layoutComponentsCSS/Navbar.module.css";
import {
    aboutMeSectionid,
    mcModsSectionid,
    contactsSectionid,
    ytChannelSectionid,
    otherProjsSectionid,
} from "@/configuration/config";

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div>
            <div className={`fixed top-0 left-0 p-4 z-30 flex w-1/12`}>
                <div className={styles.hamMenuBarSize}>
                    <div className="cursor-pointer" onClick={toggleNav}>
                        <div
                            className={`w-10 h-2 bg-green-500 mb-1 transform transition-transform duration-300 ${
                                isNavOpen ? "rotate-45 translate-y-3" : ""
                            } ${styles.hamMenuBarBorder}`}
                        ></div>
                        <div
                            className={`w-10 h-2 bg-green-600 mb-1 transform transition-opacity ${
                                isNavOpen ? "opacity-0" : ""
                            } ${styles.hamMenuBarBorder}`}
                        ></div>
                        <div
                            className={`w-10 h-2 bg-green-500 transform transition-transform duration-300 ${
                                isNavOpen ? "-rotate-45 -translate-y-3" : ""
                            } ${styles.hamMenuBarBorder}`}
                        ></div>
                    </div>
                </div>
                <div className="text-2xl text-white font-extrabold ml-5 z-30">
                    MENU
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-screen pt-10 bg-gray-800 text-white transform transition-transform duration-300 z-20 ${
                    styles.panelBorder
                } ${styles.panelWidth} ${
                    isNavOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <ul className="mt-6 pt-5 text-center">
                    <a href={aboutMeSectionid}>
                        <li
                            className={`pt-5 pb-5 hover:bg-white hover:bg-opacity-20 font-extrabold text-xl`}
                        >
                            About me
                        </li>
                    </a>
                    <a href={mcModsSectionid}>
                        <li
                            className={`pt-5 pb-5 hover:bg-white hover:bg-opacity-20 font-extrabold text-xl`}
                        >
                            Minecraft mods
                        </li>
                    </a>
                    <a href={otherProjsSectionid}>
                        <li
                            className={`pt-5 pb-5 hover:bg-white hover:bg-opacity-20 font-extrabold text-xl`}
                        >
                            Other projects
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
