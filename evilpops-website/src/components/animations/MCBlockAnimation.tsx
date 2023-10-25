import React from "react";
import styl from "@/styles/animations/MCBlockAnimation.module.css";

function MCBlockAnimation() {
    return (
        <div className={`h-full w-full ${styl.blockMoveAnim}`}>
            <span className={`inline-block ${styl.blockJumpAnim}`}>
                <img
                    src="/MCBlock.png"
                    className={`h-20 ${styl.blockRotateAnim}`}
                />
            </span>
        </div>
    );
}

export default MCBlockAnimation;
