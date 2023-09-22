import React from "react";
import styles from "../styles/WelcomePageContent.module.css";
import FlipCard from "@/components/FlipCard";

function FrontSide() {
    return <div>Bla bla 1111</div>;
}

function BackSide() {
    return <div>Bla bla 2222</div>;
}

function WelcomePageContent() {
    return (
        <div
            className={`h-full bg-[url('../../public/background.png')] bg-cover`}
        >
            <div className={`text-center pt-20`}>
                <span
                    className={`select-none text-9xl font-extrabold ${styles.evilpopsTxtFont}`}
                >
                    EvilPopS
                </span>
            </div>

            <div>
                <FlipCard
                    frontSide={<FrontSide></FrontSide>}
                    backSide={<BackSide></BackSide>}
                />
            </div>
        </div>
    );
}

export default WelcomePageContent;
