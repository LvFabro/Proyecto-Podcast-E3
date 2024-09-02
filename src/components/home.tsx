import ListenAgain from "./home/listen-again";
import QuickPicks from "./home/quick-picks";
import RecommendedAlbums from "./home/recommended-albums";
import SimilarTo from "./home/similar-to";

function Home() {
    return (
        <>
            <ListenAgain />
            <QuickPicks />
            <RecommendedAlbums />
            <SimilarTo />  
        </>
    );
}

export default Home;