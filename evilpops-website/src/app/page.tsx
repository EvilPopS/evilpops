import PageContentHolder from "@/components/PageContentHolder";
import WelcomeSectionContent from "@/components/WelcomeSectionContent";

function HomePage() {
    return (
        <main className="snap-y snap-mandatory">
            <div className="snap-start">
                <PageContentHolder href="portfolio">
                    <WelcomeSectionContent />
                </PageContentHolder>
            </div>

            <div className="snap-start">
                <PageContentHolder href="">somelse</PageContentHolder>
            </div>
        </main>
    );
}

export default HomePage;
