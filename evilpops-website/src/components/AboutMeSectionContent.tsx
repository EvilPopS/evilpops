import React from "react";
import styl from "../styles/AboutMeSectionContent.module.css";
import BoatCrossingAnimation from "./BoatCrossingAnimation";
import BubbleLink from "./BubbleLink";

function AboutMeSectionContent() {
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
                            <span className={styl.IQMTxtAnim}>I?</span>
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
                                <span className={styl.enjoyTxtAnim}>
                                    <span
                                        className={`block text-center ${styl.toRotate}`}
                                    >
                                        Enjoy!
                                    </span>
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
                        <BubbleLink
                            link="https://github.com/EvilPopS"
                            picture="/github_logo.png"
                        >
                            Github
                        </BubbleLink>
                    </div>
                    <div className={`h-full`}>
                        <div
                            className={`h-1/2 flex items-center justify-center`}
                        >
                            <BubbleLink
                                link="https://www.linkedin.com/in/evilpops/"
                                picture="/linkedin_logo.png"
                            >
                                LinkedIn
                            </BubbleLink>
                        </div>
                        <div
                            className={`h-1/2 flex items-center justify-center`}
                        >
                            <BubbleLink
                                link="https://www.youtube.com/@evilpops"
                                picture="/yt_logo.png"
                            >
                                Youtube channel
                            </BubbleLink>
                        </div>
                    </div>
                    <div className={`h-full`}>
                        <div
                            className={`h-full flex items-center justify-center`}
                        >
                            <BubbleLink link="" picture="">
                                WILL BE CV
                            </BubbleLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute bottom-0 h-1/6 w-full`}>
                <BoatCrossingAnimation />
            </div>
        </div>
    );
}

export default AboutMeSectionContent;
