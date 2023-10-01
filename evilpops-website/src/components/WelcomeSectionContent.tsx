import React from "react";
import styl from "../styles/WelcomeSectionContent.module.css";

function WelcomeSectionContent() {
    return (
        <div className={`h-full bg-gray-950 bg-blend-soft-light`}>
            <div className={`h-full columns-2`}>
                <div className={`h-full`}>
                    <div
                        className={`h-1/3 font-extrabold select-none px-32 flex justify-center items-start`}
                    >
                        <p className={`mt-auto text-green-500 text-7xl `}>
                            Who am I?
                        </p>
                    </div>
                    <div
                        className={`h-2/3 font-extrabold text-3xl text-slate-300 px-32 py-12 flex justify-center`}
                    >
                        <p className={`text-justify select-none`}>
                            &emsp;Firstly, welcome to my little oasis of
                            personal work! I'm Strahinja Popović, also known
                            (not really) as EvilPopS. I'm a software engineer
                            with a degree from the Faculty of Technical Sciences
                            in Novi Sad,{" "}
                            <span className={styl.srbClr}>Serbia</span>.
                            <br />
                            <br />
                            &emsp;You can find all sort of projects I've ever
                            done featured on this website down below.
                            <br />
                            <br />
                            <div className="text-center">Enjoy!</div>
                        </p>
                    </div>
                </div>
                <div className={`h-full columns-3 px-36 py-24 ${styl.fogAnim}`}>
                    <div className={`h-full flex items-center justify-center`}>
                        <div
                            className={`w-24 h-24 -mx-52 flex overflow-hidden bg-slate-200 ${styl.bubble}`}
                        >
                            <img src="/github_logo.png"></img>
                            <span
                                className={`flex justify-center items-center w-full text-black font-extrabold text-2xl mx-2`}
                            >
                                Github
                            </span>
                        </div>
                    </div>
                    <div className={`h-full`}>
                        <div
                            className={`h-1/2 flex items-center justify-center`}
                        >
                            <div
                                className={`w-24 h-24 -mx-52 flex overflow-hidden bg-slate-200 ${styl.bubble}`}
                            >
                                <img src="/linkedin_logo.png"></img>
                                <span
                                    className={`flex justify-center items-center w-full text-sky-600 font-extrabold text-2xl mx-2`}
                                >
                                    Linkedin
                                </span>
                            </div>
                        </div>
                        <div
                            className={`h-1/2 flex items-center justify-center`}
                        >
                            <div
                                className={`w-24 h-24 -mx-52 flex overflow-hidden bg-slate-200 ${styl.bubble}`}
                            >
                                <img src="/yt_logo.png"></img>
                                <span
                                    className={`flex justify-center items-center w-full text-red-600 font-extrabold text-2xl mx-2 text-center`}
                                >
                                    Youtube channel
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`h-full`}>
                        <div
                            className={`h-full flex items-center justify-center`}
                        >
                            <div
                                className={`w-24 h-24 -mx-52 flex overflow-hidden bg-slate-200 ${styl.bubble}`}
                            >
                                <img alt="?"></img>
                                <span
                                    className={`flex justify-center items-center w-full text-red-600 font-extrabold text-2xl mx-2 text-center`}
                                >
                                    EMPTY
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeSectionContent;
