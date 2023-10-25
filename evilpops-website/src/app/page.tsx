import PageContentHolder from "@/components/sections/PageContentHolder";
import AboutMeSectionContent from "@/components/sections/AboutMeSectionContent";
import MCModsSectionContent from "@/components/sections/MCModsSectionContent";
import OtherProjectsSectionContent from "@/components/sections/OtherProjectsSectionContent";

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
