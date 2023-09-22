import PageContentHolder from "@/components/PageContentHolder";
import WelcomePageContent from "@/components/WelcomePageContent";

function HomePage() {
    return (
        <main>
            <PageContentHolder href="welcome-page">
                <WelcomePageContent />
            </PageContentHolder>

            <PageContentHolder href="portfolio-page">somelse</PageContentHolder>
        </main>
    );
}

export default HomePage;
