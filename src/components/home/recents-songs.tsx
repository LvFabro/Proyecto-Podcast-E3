import styles from '../../styles/recent-song.module.css'
import useFetch from '../../hooks/custom-hooks/useFetch'
import ReproducirPodcast from './podcast-play-pause';

function ListSongs() {
    
    const { info, loading, error} = useFetch();


    return (
        <div className={styles.contenedor}>
            <ul>
                {loading && <h3>El contenido se está cargando... Por favor espere.</h3>}
                {error && <h1>{error}</h1>}
                {info.map((podcast) => {
                    return <li key={podcast.id}>
                        <div className={styles.podcast}>
                            <img src={podcast.channel.urls.logo_image.original} alt="" />
                            <div className={styles.title}>
                                <p>{podcast.title}</p>
                            </div>
                            <p>{podcast.description}</p>
                            
                            <ReproducirPodcast audioSrc={podcast.urls.high_mp3}/>

                        </div>
                    </li>
                }).slice(0, 8)}
            </ul>
        </div>
    )
}


export default ListSongs;