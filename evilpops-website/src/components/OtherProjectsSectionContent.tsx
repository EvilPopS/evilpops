import React from "react";
import styl from "../styles/OtherProjectsSectionContent.module.css";
import ProjectCard from "./ProjectCard";
import ProjectsContainer from "./ProjectsContainer";

function OtherProjectsSectionContent() {
    return (
        <div className={`h-full bg-gray-950 relative`}>
            <div className={`h-full columns-2`}>
                <div className={`h-full`}>
                    <div
                        className={`h-1/3 font-extrabold px-32 flex justify-center items-start`}
                    >
                        <p className={`mt-auto text-green-500 text-7xl `}>
                            Other projects
                        </p>
                    </div>
                    <div
                        className={`h-2/3 font-extrabold text-3xl text-slate-300 px-32 py-12 flex justify-center`}
                    >
                        <p className={`text-justify`}>
                            &emsp;Here, you can browse all other projects that
                            I've done. Same mechanics as for the MC section.
                            <br />
                            <br />
                            &emsp;Cards contain a little information about the
                            project. Clicking on 'details' will open the page
                            dedicated for all the information about the project.
                            <br />
                            <br />
                            <span className={`block text-center`}>
                                &#128516;
                            </span>
                        </p>
                    </div>
                </div>
                <div className={`h-full`}>
                    <ProjectsContainer
                        maxCardInd={1}
                        containerName="other-projs-cards-cont"
                    >
                        <ProjectCard
                            href="under-construction"
                            imgBg="bg-[url('/under-construction.png')]"
                            title="COMING SOON"
                        >
                            Card is under construction!!
                        </ProjectCard>
                        <ProjectCard
                            href="under-construction"
                            imgBg="bg-[url('/under-construction.png')]"
                            title="COMING SOON"
                        >
                            This one is not even started lol
                        </ProjectCard>
                    </ProjectsContainer>
                </div>
            </div>
        </div>
    );
}

export default OtherProjectsSectionContent;
