import { Search } from "lucide-react";
import styles from "../../styles/header.module.css"


function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.logo} src="https://play-lh.googleusercontent.com/76AjYITcB0dI0sFqdQjNgXQxRMlDIswbp0BAU_O5Oob-73b6cqKggVlAiNXQAW5Bl1g=w240-h480-rw" alt="podcastOnline"  />
                    <h1>Podcast Info</h1>
                </div>
                <div className={styles.busqueda}>
                    <input className={styles.search} type="search" placeholder="Buscar..."/>
                    <button className={styles.button}><Search color="#ffffff" size={45} /></button>
                </div>
                <div>
                    <img className={styles.avatar} src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg" alt="user"  />
                </div>
            </header>
            <hr />          
        </>
    );
}





export default Header;