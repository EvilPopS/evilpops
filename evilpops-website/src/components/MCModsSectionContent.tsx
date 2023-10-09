import React from "react";
import styl from "../styles/MCModsSectionContent.module.css";

function MCModsSectionContent() {
    return (
        <div className={`h-full bg-gray-950 bg-cover`}>
            <div className={`h-full columns-2`}>
                <div className={`h-full`}></div>
                <div className={`h-full`}>
                    <div
                        className={`h-1/3 font-extrabold select-none px-32 flex justify-center items-start`}
                    >
                        <p
                            className={`mt-auto text-7xl ${styl.aboutSectionTitleStyle}`}
                        >
                            Minecraft Mods
                        </p>
                    </div>
                    <div
                        className={`h-2/3 font-extrabold text-3xl text-slate-300 px-32 py-12 flex justify-center`}
                    >
                        <p className={`text-justify select-none`}>
                            &emsp;In this section you can browse Minecraft mods
                            I've made. Every card is one mod and contains the
                            basic information about it.
                            <br />
                            <br />
                            &emsp;In order to see all the details (pictures &
                            content), how to download and use the mod, you can
                            click on the card and it will lead you to the
                            selected mod oriented page.
                            <br />
                            <br />
                            <span className={`text-center block`}>
                                Yeess, everything is free, I'm a good
                                soul.&#128516;
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MCModsSectionContent;
