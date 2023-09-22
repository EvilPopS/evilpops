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
            className={`${styles.cardContainer} relative bg-transparent w-80 h-52`}
        >
            <div className={`${styles.cardInnerLayer}  w-full h-full`}>
                <div
                    className={`${styles.frontSide} absolute w-full h-full p-3 bg-white font-serif`}
                >
                    {frontSide}
                </div>
                <div
                    className={`${styles.backSide}  w-full h-full p-3 bg-white font-serif`}
                >
                    {backSide}
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
