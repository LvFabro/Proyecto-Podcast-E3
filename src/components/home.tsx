import Header from "./home/header";
import ListenAgain from "./home/listen-again";
import PlayBar from "./home/play-bar";
import QuickPicks from "./home/quick-picks";
import RecommendedAlbums from "./home/recommended-albums";
import SimilarTo from "./home/similar-to";

function Home() {
    return (
        <>
        <Header />
        <ListenAgain />
        <QuickPicks />
        <RecommendedAlbums />
        <SimilarTo />
        <PlayBar />
        </>
    );
}

export default Home;