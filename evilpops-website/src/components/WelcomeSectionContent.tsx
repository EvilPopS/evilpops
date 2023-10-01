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
                            <span className={styl.whoTxtAnim}>Who</span>{" "}
                            <span className={styl.amTxtAnim}>am</span>{" "}
                            <span className={styl.txtFadeInAnim3Secs}>I?</span>
                        </p>
                    </div>
                    <div
                        className={`h-2/3 font-extrabold text-3xl text-slate-300 px-32 py-12 flex justify-center`}
                    >
                        <p className={`text-justify select-none`}>
                            &emsp;
                            <span className={styl.txtFadeInAnim3Secs}>
                                Firstly, welcome to my little oasis of personal
                                work! I'm Strahinja Popović, also known (not
                                really) as EvilPopS . I'm a software engineer
                                with a degree from the Faculty of Technical
                                Sciences in Novi Sad, <span>Serbia </span>
                                <img
                                    src="/srb_flag.png"
                                    className={`h-8 inline-block`}
                                />
                                .
                            </span>
                            <br />
                            <br />
                            <span className={styl.txtFadeInAnim5Secs}>
                                &emsp;You can find all sort of projects I've
                                ever done featured on this website down below.
                            </span>
                            <br />
                            <br />
                            <span className={styl.txtFadeInAnim7Secs}>
                                <span
                                    className={`block text-center ${styl.enjoyTxtAnim}`}
                                >
                                    Enjoy!
                                </span>
                            </span>
                        </p>
                    </div>
                </div>
                <div
                    className={`h-full columns-3 px-36 py-24 before:bg-[url('/fog.png')] 
                        before:bg-cover before:absolute before:top-0 before:right-0 before:w-1/2 before:h-full 
                        ${styl.fogAnim} ${styl.fogMask}`}
                >
                    <div className={`h-full flex items-center justify-center`}>
                        <a
                            href="https://github.com/EvilPopS"
                            target="_blank"
                            className={`w-24 h-24 -mx-52 flex overflow-hidden bg-slate-200 ${styl.bubble}`}
                        >
                            <img src="/github_logo.png"></img>
                            <span
                                className={`flex justify-center items-center w-full text-black font-extrabold text-2xl mx-2`}
                            >
                                Github
                            </span>
                        </a>
                    </div>
                    <div className={`h-full`}>
                        <div
                            className={`h-1/2 flex items-center justify-center`}
                        >
                            <a
                                href="https://www.linkedin.com/in/evilpops/"
                                target="_blank"
                                className={`w-24 h-24 -mx-52 flex overflow-hidden bg-slate-200 ${styl.bubble}`}
                            >
                                <img src="/linkedin_logo.png"></img>
                                <span
                                    className={`flex justify-center items-center w-full text-sky-600 font-extrabold text-2xl mx-2`}
                                >
                                    Linkedin
                                </span>
                            </a>
                        </div>
                        <div
                            className={`h-1/2 flex items-center justify-center`}
                        >
                            <a
                                href="https://www.youtube.com/@evilpops"
                                target="_blank"
                                className={`w-24 h-24 -mx-52 flex overflow-hidden bg-slate-200 ${styl.bubble}`}
                            >
                                <img src="/yt_logo.png"></img>
                                <span
                                    className={`flex justify-center items-center w-full text-red-600 font-extrabold text-2xl mx-2 text-center`}
                                >
                                    Youtube channel
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className={`h-full`}>
                        <div
                            className={`h-full flex items-center justify-center`}
                        >
                            <a
                                target="_blank"
                                className={`w-24 h-24 -mx-52 flex overflow-hidden bg-slate-200 ${styl.bubble}`}
                            >
                                <img alt="?"></img>
                                <span
                                    className={`flex justify-center items-center w-full text-red-600 font-extrabold text-2xl mx-2 text-center`}
                                ></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeSectionContent;
