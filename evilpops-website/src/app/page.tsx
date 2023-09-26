import PageContentHolder from "@/components/PageContentHolder";
import WelcomeSectionContent from "@/components/WelcomeSectionContent";

function HomePage() {
    return (
        <main>
            <PageContentHolder href="welcome-section">
                <WelcomeSectionContent />
            </PageContentHolder>

            <PageContentHolder href="portfolio-section">
                somelse
            </PageContentHolder>
        </main>
    );
}

export default HomePage;
