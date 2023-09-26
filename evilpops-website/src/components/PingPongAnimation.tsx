import styl from "../styles/PingPongAnimation.module.css";

function PingPongAnimation() {
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
