import CardConteiner from "./card-conteiner";
import ListSongs from "./recents-songs";

function ListenAgain() {
    return (
        <CardConteiner title={'Escuchar de nuevo'} text={'Ver todos'}>
            <ListSongs>
                
            </ListSongs>
        </CardConteiner>
    )
}

export default ListenAgain;