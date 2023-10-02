import React from "react";
import styl from "../styles/BubbleLink.module.css";

interface BubbleLinkProps {
    children: React.ReactNode;
    link: string;
    picture: string;
}

function BubbleLink(props: BubbleLinkProps) {
    return (
        <a
            href={props.link}
            target="_blank"
            className={`w-24 h-24 -mx-52 flex overflow-hidden bg-slate-200 ${styl.bubble}`}
        >
            <img src={props.picture}></img>
            <span
                className={`flex justify-center items-center w-full text-black font-extrabold text-2xl mx-2`}
            >
                {props.children}
            </span>
        </a>
    );
}

export default BubbleLink;
