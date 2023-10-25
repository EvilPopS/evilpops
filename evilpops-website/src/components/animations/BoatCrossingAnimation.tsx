import React from "react";
import styl from "@/styles/animations/BoatCrossingAnimation.module.css";

function BoatCrossingAnimation() {
    return (
        <div className={`h-full ${styl.boatAnim}`}>
            <img src="/boat.png" className={`w-32 mt-10 z-0`} />
            <div className={``}>
                <div
                    className={`absolute -mt-0.5 ${styl.waterLineBorder} ${styl.mainWLAnim}`}
                ></div>
                <div
                    className={`absolute w-4 ml-5 ${styl.waterLineBorder} ${styl.wlAnim1}`}
                ></div>

                <div
                    className={`absolute w-5 ml-5 ${styl.waterLineBorder} ${styl.wlAnim2} `}
                ></div>

                <div
                    className={`absolute w-3 ml-10 ${styl.waterLineBorder} ${styl.wlAnim3} `}
                ></div>

                <div
                    className={`absolute w-3 ml-10 ${styl.waterLineBorder} ${styl.wlAnim4} `}
                ></div>

                <div
                    className={`absolute w-2 ml-10 ${styl.waterLineBorder} ${styl.wlAnim5} `}
                ></div>

                <div
                    className={`absolute w-4 ml-10 ${styl.waterLineBorder} ${styl.wlAnim6} `}
                ></div>

                <div
                    className={`absolute w-3 ml-10 ${styl.waterLineBorder} ${styl.wlAnim4} `}
                ></div>

                <div
                    className={`absolute w-4 ml-10 ${styl.waterLineBorder} ${styl.wlAnim3} `}
                ></div>
            </div>
        </div>
    );
}

export default BoatCrossingAnimation;
