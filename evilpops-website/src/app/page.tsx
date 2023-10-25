import PageContentHolder from "@/components/PageContentHolder";
import AboutMeSectionContent from "@/components/AboutMeSectionContent";
import MCModsSectionContent from "@/components/MCModsSectionContent";
import OtherProjectsSectionContent from "@/components/OtherProjectsSectionContent";

function HomePage() {
    return (
        <main>
            <PageContentHolder href="about-me">
                <AboutMeSectionContent />
            </PageContentHolder>

            <PageContentHolder href="mc-mods">
                <MCModsSectionContent />
            </PageContentHolder>

            <PageContentHolder href="other-projects">
                <OtherProjectsSectionContent />
            </PageContentHolder>
        </main>
    );
}

export default HomePage;
