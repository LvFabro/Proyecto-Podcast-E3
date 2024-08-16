import { EllipsisVertical, Pause, Repeat, SkipBack, SkipForward, ThumbsDown, ThumbsUp, Volume2 } from 'lucide-react';
import styles from '../styles/play-bar.module.css'
import CardConteiner from './card-conteiner';

function PlayBar() {
    return (
        <section className={styles.bar}>
            <div>
                <button className={styles.button}><SkipBack color="#ffffff" size={25}/></button>
                <button className={styles.button}><Pause color="#ffffff" size={25}/></button>
                <button className={styles.button}><SkipForward color="#ffffff" size={25}/></button>
            </div>
            <div className={styles.name}>
                <CardConteiner  title={'Billy Idol'} text={'Rebel Yell'} children>
                    
                </CardConteiner>
                <div className={styles.calification}>
                    <button className={styles.button}><ThumbsDown color="#ffffff" size={25}/></button>
                    <button className={styles.button}><ThumbsUp color="#ffffff" size={25}/></button>
                    <button className={styles.button}><EllipsisVertical color="#ffffff" size={25}/></button>
                </div>
                
            </div>
            <div>
                <button className={styles.button}><Repeat color="#ffffff" size={25}/></button>
                <button className={styles.button}><Volume2 color="#ffffff" size={25}/></button>
            </div>
        </section>
    );
}

export default PlayBar;