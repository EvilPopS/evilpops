import PageContentHolder from "@/components/PageContentHolder";
import AboutMeSectionContent from "@/components/AboutMeSectionContent";

function HomePage() {
    return (
        <main>
            <PageContentHolder href="about-me">
                <AboutMeSectionContent />
            </PageContentHolder>

            <PageContentHolder href="mc-mods">
                <></>
            </PageContentHolder>
        </main>
    );
}

export default HomePage;
