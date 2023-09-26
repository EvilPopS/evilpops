"use client";

import { useRouter } from "next/navigation";
import styl from "../styles/PingPongAnimation.module.css";

function PingPongAnimation() {
    const router = useRouter();

    return (
        <div className={`h-full grid grid-cols-12`}>
            <div className={`h-full col-span-1`}>
                <div
                    className={`h-1/2 w-3 ml-auto bg-black ${styl.ppsticksBorder} ${styl.leftPPStickAnim}`}
                />
            </div>
            <div className={`h-full col-span-10`}>
                <img
                    src={`brain.png`}
                    className={`h-12 select-none ${styl.ppBrainAnim}`}
                    onClick={() => {
                        router.push("#portfolio-section");
                        console.log(1234);
                    }}
                />
            </div>
            <div className={`h-full col-span-1`}>
                <div
                    className={`h-1/2 w-3 bg-black ${styl.ppsticksBorder} ${styl.rightPPStickAnim}`}
                />
            </div>
        </div>
    );
}

export default PingPongAnimation;
