import styles from '../../styles/recent-song.module.css'

const recientes = [
    {imagen : 'https://cdns-images.dzcdn.net/images/cover/04a95dd06db9a2941a47b3c730b34a7d/1900x1900-000000-80-0-0.jpg', album : 'Prestigio', autor : 'Daddy Yankee'  },
    {imagen : 'https://i.scdn.co/image/ab67616d0000b273a02702f77600ef7f377192e2', album : 'En Pleno Vuelo', autor : 'Marco Antonio Solis'  },
    {imagen : 'https://www.rockaxis.com/img/newsList/2525753.jpg', album : 'Jessico', autor : 'Babasonicos'  },
    {imagen : 'https://indiehoy.com/wp-content/uploads/2023/10/babasonicos-infame.jpg', album : 'Infame', autor : 'Babasonicos'  },
    {imagen : 'https://m.media-amazon.com/images/I/81JM2ijH7tL._UF1000,1000_QL80_.jpg', album : 'Infesstisuman', autor : 'Ghost'  },
];

function ListSongs() {
    return (
            <div className={styles.contenedor}>
                {recientes.map((reciente) => {
                    return( 
                        <div className="container">
                            <img className={styles.imagen} src={reciente.imagen} />  
                            <p className={styles.album}>{reciente.album}</p>
                            <p className={styles.aut}>{reciente.autor}</p>  
                        </div>
                    )
                } )}
                <div/>
            </div>   
    );
}
    

export default ListSongs;