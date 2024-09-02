import CardConteiner from "./card-conteiner";
import QuickPicksSongs from "./quick-picks-songs";

function QuickPicks(){
    return (
        <section>
            <CardConteiner title={'Elección rápida'} text={'INICIAR REPRODUCCION DESDE LAS CANCIONES'} children={<QuickPicksSongs />}>
            </CardConteiner>
        </section>
    );
}

export default QuickPicks;