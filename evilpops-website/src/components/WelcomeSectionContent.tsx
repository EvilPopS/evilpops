import React from "react";
import styl from "../styles/WelcomeSectionContent.module.css";
import FlipCard from "@/components/FlipCard";

function CVCardFront() {
    return (
        <div
            className={`h-full w-full bg-[url("/cv_card_bg.png")] bg-no-repeat bg-center`}
        ></div>
    );
}

function CVCardBack() {
    return (
        <a href="#portfolio-section">
            <div className={`p-3 h-full ${styl.contentCont}`}>
                <div className={`h-1/2`}>
                    <div
                        className={`${styl.movingText} mb-3 text-2xl font-extrabold`}
                    >
                        Who am I?
                    </div>
                    <div className={`text-justify text-lg`}>
                        Wanna know who I am? Dying of curiosity to see what
                        skills I possess? Then catch that brain! Or you are too
                        soft to touch that nasty thing...
                    </div>
                </div>

                <div className={`h-1/2`}>
                    <div className={`h-full grid grid-cols-12`}>
                        <div className={`h-full col-span-1`}>
                            <div
                                className={`h-1/2 w-3 ml-auto bg-black ${styl.ppsticksBorder} ${styl.leftPPStickAnim}`}
                            />
                        </div>
                        <div className={`h-full col-span-10`}>
                            <img
                                src={`brain.png`}
                                className={`h-12 select-none ${styl.ppBrainAnim}`}
                            />
                        </div>
                        <div className={`h-full col-span-1`}>
                            <div
                                className={`h-1/2 w-3 bg-black ${styl.ppsticksBorder} ${styl.rightPPStickAnim}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

function WelcomeSectionContent() {
    return (
        <div className={`h-full bg-[url("/welcome_section_bg.png")] bg-cover`}>
            <div className={`h-2/6 flex items-center justify-center`}>
                <span
                    className={`select-none text-9xl font-extrabold p-10 animate-pulse ${styl.evilpopsTxtFont}`}
                >
                    EvilPopS
                </span>
            </div>

            <div className={`columns-2 h-4/6`}>
                <div className={`h-full`}>
                    <div className={`h-3/6 w-7/12 ml-auto pr-6 pb-5`}>
                        <FlipCard
                            frontSide={<CVCardFront></CVCardFront>}
                            backSide={<CVCardBack></CVCardBack>}
                        />
                    </div>
                    <div className={`h-3/6 w-7/12 ml-auto pr-6 pb-5`}>
                        <FlipCard
                            frontSide={<CVCardFront></CVCardFront>}
                            backSide={<CVCardBack></CVCardBack>}
                        />
                    </div>
                </div>

                <div className={`h-full`}>
                    <div className={`h-3/6 w-7/12 pl-6 pb-5`}>
                        <FlipCard
                            frontSide={<CVCardFront></CVCardFront>}
                            backSide={<CVCardBack></CVCardBack>}
                        />
                    </div>
                    <div className={`h-3/6 w-7/12 pl-6 pb-5`}>
                        <FlipCard
                            frontSide={<CVCardFront></CVCardFront>}
                            backSide={<CVCardBack></CVCardBack>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeSectionContent;
