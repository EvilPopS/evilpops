import React from "react";
import styl from "../styles/WelcomeSectionContent.module.css";
import FlipCard from "@/components/FlipCard";
import PingPongAnimation from "./PingPongAnimation";

function CVCardFront() {
    return (
        <div
            className={`h-full w-full bg-[url("/cv_card_bg.png")] bg-no-repeat bg-center`}
        ></div>
    );
}

function CVCardBack() {
    return (
        <div className={`p-3 h-full ${styl.contentCont}`}>
            <div className={`h-1/2`}>
                <div
                    className={`${styl.movingText} mb-3 text-2xl font-extrabold`}
                >
                    Who am I?
                </div>
                <div className={`text-justify text-lg`}>
                    Wanna know who I am? Dying of curiosity to see what skills I
                    possess? Then catch that brain! Well, if you are capable of
                    doing it... You do look a little bit soft...
                </div>
            </div>

            <div className={`h-1/2`}>
                <PingPongAnimation />
            </div>
        </div>
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
