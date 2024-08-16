import styles from '../styles/similar-songs.module.css'

const escucharDeNuevo = [
    {imagen : 'https://cdns-images.dzcdn.net/images/cover/04a95dd06db9a2941a47b3c730b34a7d/1900x1900-000000-80-0-0.jpg', accion : 'Volver a escuchar', reproducciones : '54.2M oyentes mensuales'  },
    {imagen : 'https://i.scdn.co/image/ab67616d0000b273a02702f77600ef7f377192e2', accion : 'Volver a escuchar', reproducciones : '10.7M oyentes mensuales'  },
    {imagen : 'https://www.rockaxis.com/img/newsList/2525753.jpg', accion : 'Volver a escuchar', reproducciones : '3.8M oyentes mensuales'  },
    {imagen : 'https://indiehoy.com/wp-content/uploads/2023/10/babasonicos-infame.jpg', accion : 'Volver a escuchar', reproducciones : '3.8M oyentes mensuales'  },
    {imagen : 'https://m.media-amazon.com/images/I/81JM2ijH7tL._UF1000,1000_QL80_.jpg', accion : 'Volver a escuchar', reproducciones : '7.8M oyentes mensuales'  },
];

function SimilarSongs() {
    return (
            <div className={styles.contenedor}>
                {escucharDeNuevo.map((escuchar) => {
                    return( 
                        <div className="container">
                            <img className={styles.imagen} src={escuchar.imagen} />  
                            <p className={styles.accion}>{escuchar.accion}</p>
                            <p className={styles.aut}>{escuchar.reproducciones}</p>  
                        </div>
                    )
                } )}
                <div/>
            </div>   
    );
}
    

export default SimilarSongs;