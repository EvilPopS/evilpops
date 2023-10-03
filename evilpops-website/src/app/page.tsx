import PageContentHolder from "@/components/PageContentHolder";
import WelcomeSectionContent from "@/components/WelcomeSectionContent";

function HomePage() {
    return (
        <main>
            <PageContentHolder href="welcome">
                <WelcomeSectionContent />
            </PageContentHolder>

            <PageContentHolder href="mc-mods">somelse</PageContentHolder>
        </main>
    );
}

export default HomePage;
