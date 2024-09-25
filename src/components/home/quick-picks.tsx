import CardConteiner from "./card-conteiner";
import ListSongs from "./recents-songs";

function QuickPicks(){
    return (
        <section>
            <CardConteiner title={'Elección rápida'} text={'INICIAR REPRODUCCION DESDE LAS CANCIONES'} children={<ListSongs/>}>
            
            </CardConteiner>
        </section>
    );
}

export default QuickPicks;