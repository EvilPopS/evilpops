import React from "react";
import styles from "../styles/FlipCard.module.css";

function FlipCard({
    frontSide,
    backSide,
}: {
    frontSide: React.ReactNode;
    backSide: React.ReactNode;
}) {
    return (
        <div
            className={`${styles.cardContainer} relative bg-transparent w-full h-full`}
        >
            <div className={`${styles.cardInnerLayer}  w-full h-full`}>
                <div
                    className={`${styles.frontSide} absolute w-full h-full bg-white font-serif overflow-hidden`}
                >
                    {frontSide}
                </div>
                <div
                    className={`${styles.backSide}  w-full h-full bg-white font-serif overflow-hidden`}
                >
                    {backSide}
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
