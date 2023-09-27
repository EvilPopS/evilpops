import React from "react";
import styl from "../styles/EvilpopsTxt.module.css";
import {
    portfolioSectionId,
    mcModsSectionid,
    contactsSectionid,
    ytChannelSectionid,
    otherProjsSectionid,
} from "@/configuration/config";

function evilpopsTxt() {
    return (
        <div className={`fixed top-0 right-5 p-3 z-10 flex`}>
            <a href={portfolioSectionId}>
                <span
                    className={`select-none text-4xl font-extrabold animate-pulse ${styl.evilpopsTxtFont}`}
                >
                    EvilPopS
                </span>
            </a>
        </div>
    );
}

export default evilpopsTxt;
