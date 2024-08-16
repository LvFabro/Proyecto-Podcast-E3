import CardConteiner from "./card-conteiner";
import SimilarSongs from "./similar-songs";

function SimilarTo() {
    return (
        <CardConteiner title={'Albums Recomendados'} text={'SIMILAR A'}>
            <SimilarSongs>
                
            </SimilarSongs>
        </CardConteiner>
    )
}

export default SimilarTo;