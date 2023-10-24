import React from "react";
import styl from "../styles/EvilpopsTxt.module.css";
import { aboutMeSectionid } from "@/configuration/config";

function EvilpopsTxt() {
    return (
        <div className={`fixed top-0 right-5 p-3 z-10 flex`}>
            <a href={aboutMeSectionid}>
                <span
                    className={`text-4xl font-extrabold animate-pulse ${styl.evilpopsTxtFont}`}
                >
                    EvilPopS
                </span>
            </a>
        </div>
    );
}

export default EvilpopsTxt;
