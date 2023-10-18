import React from "react";
import styl from "../styles/MCModsContainer.module.css";

function MCModsContainer() {
    return (
        <div className={`h-full w-full flex px-16`}>
            <div className={`h-full w-1/6 flex justify-center items-center`}>
                <div className={`w-10 h-10`}>
                    <img src="/left_arrow_btn.png" />
                </div>
            </div>

            <div
                className={`h-full w-4/6 flex justify-center items-center overflow-hidden`}
            >
                <div
                    className={`flex flex-nowrap justify-center items-center ${styl.noScroll}`}
                >
                    <div
                        className={`bg-amber-950 overflow-hidden mx-10 ${styl.cardStyle}`}
                    >
                        <div
                            className={`h-3/5 bg-cover bg-[url('/temp-mc-pic.png')] ${styl.imgFadeOut}`}
                        ></div>
                        <div className={`h-2/5`}>
                            <div className={`h-3/4 px-6 text-justify text-lg`}>
                                Some text goes here and I need a bunch of it so
                                I can style it properly so I am bullshitting
                                right now don't mind what is written
                            </div>
                            <div className={`h-1/4 flex justify-center`}>
                                <a
                                    href="to-mod-dedicated-page"
                                    className={`font-black text-2xl text-green-500`}
                                >
                                    DETAILS
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`bg-amber-950 overflow-hidden mx-10 ${styl.cardStyle}`}
                    >
                        <div
                            className={`h-3/5 bg-cover bg-[url('/temp-mc-pic.png')] ${styl.imgFadeOut}`}
                        ></div>
                        <div className={`h-2/5`}>
                            <div className={`h-3/4 px-6 text-justify text-lg`}>
                                Some text goes here and I need a bunch of it so
                                I can style it properly so I am bullshitting
                                right now don't mind what is written
                            </div>
                            <div className={`h-1/4 flex justify-center`}>
                                <a
                                    href="to-mod-dedicated-page"
                                    className={`font-black text-2xl text-green-500`}
                                >
                                    DETAILS
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`h-full flex w-1/6 justify-center items-center`}>
                <div className={`w-10 h-10`}>
                    <img src="/right_arrow_btn.png" />
                </div>
            </div>
        </div>
    );
}

export default MCModsContainer;
