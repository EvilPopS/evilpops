import PageContentHolderProps from "@/interfaces/componentPropsInterfaces/PageContentHolderProps";
import React from "react";

function PageContentHolder(props: PageContentHolderProps) {
    const { children, href }: PageContentHolderProps = props;
    return (
        <div id={href} className={`h-screen w-screen`}>
            {children}
        </div>
    );
}

export default PageContentHolder;
