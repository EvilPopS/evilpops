import React from "react";
import styl from "../styles/MCModCard.module.css";

interface CardProps {
    children: React.ReactNode;
    imgBg: string;
    href: string;
    title: string;
}

function MCModCard(props: CardProps) {
    return (
        <div
            className={`w-[20rem] h-[40rem] bg-slate-800 overflow-hidden mx-[2rem] ${styl.cardStyle}`}
        >
            <div
                className={`h-2/5 bg-cover ${props.imgBg} ${styl.imgFadeOut}`}
            ></div>
            <div className={`h-3/5`}>
                <div className={`h-3/4 px-6`}>
                    <div
                        className={`mb-8 mt-1 text-center font-black text-slate-200 text-2xl`}
                    >
                        {props.title}
                    </div>
                    <div className={`flex items-center text-justify text-lg`}>
                        {props.children}
                    </div>
                </div>
                <div className={`h-1/4 flex justify-center items-center`}>
                    <a
                        href={props.href}
                        className={`font-black text-2xl text-green-500`}
                    >
                        DETAILS
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MCModCard;
