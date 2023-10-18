"use client";

import React, { useEffect, useState } from "react";
import styl from "../styles/MCModsContainer.module.css";
import MCModCard from "./MCModCard";

function MCModsContainer() {
    const MAX_CARDS = 2;
    let currCardInd = 0;

    const leftArrowClick = () => {
        if (currCardInd == 0) return;
        currCardInd--;
        changeContPos();
    };

    const rightArrowClick = () => {
        if (currCardInd == MAX_CARDS) return;
        currCardInd++;
        changeContPos();
    };

    const changeContPos = () => {
        const cardCont = document.getElementById("cards-cont");
        if (cardCont)
            cardCont.style.transform = `translateX(calc(50% - 12rem + ${
                currCardInd * -22
            }rem))`;
    };

    return (
        <div className={`h-full w-full flex px-16`}>
            <div className={`h-full w-1/6 flex justify-center items-center`}>
                <div className={`w-10 h-10`}>
                    <img src="/left_arrow_btn.png" onClick={leftArrowClick} />
                </div>
            </div>

            <div
                className={`h-full w-4/6 flex justify-center items-center overflow-hidden`}
            >
                <div
                    id="cards-cont"
                    className={`h-full w-screen flex flex-nowrap justify-center items-center ${styl.noScroll} ${styl.initPosition}`}
                >
                    <MCModCard
                        href="doesnt-matter"
                        imgBg="bg-[url('/temp-mc-pic.png')]"
                    >
                        Some text goes here and I need a bunch of it so I can
                        style it properly so I am bullshitting right now don't
                        mind what is written
                    </MCModCard>
                    <MCModCard
                        href="doesnt-matter"
                        imgBg="bg-[url('/temp-mc-pic.png')]"
                    >
                        Some text goes here and I need a bunch of it so I can
                        style it properly so I am bullshitting right now don't
                        mind what is written
                    </MCModCard>
                    <MCModCard
                        href="doesnt-matter"
                        imgBg="bg-[url('/temp-mc-pic.png')]"
                    >
                        Some text goes here and I need a bunch of it so I can
                        style it properly so I am bullshitting right now don't
                        mind what is written
                    </MCModCard>
                </div>
            </div>

            <div className={`h-full flex w-1/6 justify-center items-center`}>
                <div className={`w-10 h-10`}>
                    <img src="/right_arrow_btn.png" onClick={rightArrowClick} />
                </div>
            </div>
        </div>
    );
}

export default MCModsContainer;
