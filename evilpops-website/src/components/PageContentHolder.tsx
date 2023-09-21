import React from "react";
import styles from "../styles/PageContentHolder.module.css";

interface PageContentHolderProps {
    children: React.ReactNode;
    href: string;
}

function PageContentHolder(props: PageContentHolderProps) {
    const { children, href }: PageContentHolderProps = props;
    return (
        <div id={href} className={styles.pageSize}>
            {children}
        </div>
    );
}

export default PageContentHolder;
