import PageContentHolder from "@/components/PageContentHolder";
import WelcomeSectionContent from "@/components/WelcomeSectionContent";

function HomePage() {
    return (
        <main>
            <PageContentHolder href="portfolio">
                <WelcomeSectionContent />
            </PageContentHolder>

            <PageContentHolder href="">somelse</PageContentHolder>
        </main>
    );
}

export default HomePage;
