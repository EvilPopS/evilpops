import PageContentHolder from "@/components/PageContentHolder";

function HomePage() {
    return (
        <main>
            <PageContentHolder href="welcome-page">
                <div className="bg-slate-500 h-full bg-[url('../../public/background.png')]"></div>
            </PageContentHolder>

            <PageContentHolder href="portfolio-page">somelse</PageContentHolder>
        </main>
    );
}

export default HomePage;
