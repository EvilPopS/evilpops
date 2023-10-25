import React from "react";
import styl from "@/styles/other/TopOfScreenBlur.module.css";

function TopOfScreenBlur() {
    return (
        <div
            className={`fixed top-0 z-10 h-32 w-full backdrop-blur-xl ${styl.blurMask} ${styl.fadeIn}`}
        ></div>
    );
}

export default TopOfScreenBlur;
