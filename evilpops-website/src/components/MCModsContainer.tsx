"use client";

import React from "react";
import styl from "../styles/MCModsContainer.module.css";
import MCModCard from "./MCModCard";
import { MAX_MC_MOD_CARD_IND } from "@/configuration/config";

function MCModsContainer() {
    let currCardInd = 0;

    const leftArrowClick = () => {
        if (currCardInd == 0) return;
        currCardInd--;
        changeContPos();
    };

    const rightArrowClick = () => {
        if (currCardInd == MAX_MC_MOD_CARD_IND) return;
        currCardInd++;
        changeContPos();
    };

    const changeContPos = () => {
        const cardCont = document.getElementById("cards-cont");
        if (cardCont)
            cardCont.style.transform = `translateX(calc(50% - 12rem - ${
                currCardInd * 24
            }rem))`;
    };

    return (
        <div className={`h-full w-full flex px-16`}>
            <div className={`h-full w-1/6 flex justify-center items-center`}>
                <div
                    className={`w-10 h-16 cursor-pointer bg-[url('/left_arrow_btn.png')] bg-cover hover:bg-[url('/left_arrow_btn_hover.png')] `}
                    onClick={leftArrowClick}
                ></div>
            </div>

            <div
                className={`h-full w-4/6 flex justify-center items-center overflow-hidden ${styl.contFade} `}
            >
                <div
                    id="cards-cont"
                    className={`h-full flex flex-nowrap justify-center items-center ${styl.noScroll} ${styl.initPosition}`}
                >
                    <MCModCard
                        href="doesnt-matter"
                        imgBg="bg-[url('/temp-mc-pic.png')]"
                        title="Some Mode Name"
                    >
                        Some mod desc goes here
                    </MCModCard>
                    <MCModCard
                        href="doesnt-matter"
                        imgBg="bg-[url('/temp-mc-pic.png')]"
                        title="YET TO COME"
                    >
                        The mod is in construction, or maybe not, no one
                        knows...
                    </MCModCard>
                </div>
            </div>

            <div className={`h-full flex w-1/6 justify-center items-center`}>
                <div
                    className={`w-10 h-16 cursor-pointer bg-[url('/right_arrow_btn.png')] bg-cover hover:bg-[url('/right_arrow_btn_hover.png')]`}
                    onClick={rightArrowClick}
                ></div>
            </div>
        </div>
    );
}

export default MCModsContainer;
