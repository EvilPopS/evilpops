import React from "react";

interface PageContentHolderProps {
    children: React.ReactNode;
    href: string;
}

function PageContentHolder(props: PageContentHolderProps) {
    const { children, href }: PageContentHolderProps = props;
    return (
        <div id={href} className={`h-screen w-screen`}>
            {children}
        </div>
    );
}

export default PageContentHolder;
