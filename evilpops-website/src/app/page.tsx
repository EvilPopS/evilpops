import PageContentHolder from "@/components/PageContentHolder";
import AboutMeSectionContent from "@/components/AboutMeSectionContent";
import MCModsSectionContent from "@/components/MCModsSectionContent";

function HomePage() {
    return (
        <main>
            <PageContentHolder href="about-me">
                <AboutMeSectionContent />
            </PageContentHolder>

            <PageContentHolder href="mc-mods">
                <MCModsSectionContent />
            </PageContentHolder>
        </main>
    );
}

export default HomePage;
