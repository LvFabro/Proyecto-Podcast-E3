import { House, CirclePlus } from 'lucide-react';
import styles from '../../styles/sidebar.module.css'

type ItemList = {
    title: string;
    description: string;
    image: string;
}

type propSidebar = {
    onToggleForm: React.Dispatch<React.SetStateAction<boolean>>;
    list: ItemList[];
}

function Sidebar(props: propSidebar) {

    function handleClick() {
        props.onToggleForm((prevState) => !prevState);
    }

// --------Sidebar ----------------

    return (
        <>
            <div className={styles.sidebar}>
                <button type='button'><House size={25} />Inicio</button>
                <hr />
                <button onClick={handleClick}>Nueva playlist <CirclePlus size={30} /></button>
                <hr />
                {/* Renderizado de la playlist creada */}
                <div>
                   {props.list.map((playlist) => {
                    return (
                        <ul>
                            <li>
                                    <img src={playlist.image} alt="image" />
                                <div>
                                    <h4>{playlist.title}</h4>
                                    <p>{playlist.description}</p>
                                </div>
                            </li>
                        </ul>  
                    )
                   } )} 
                </div>
            </div>
        </>
    );
}

export default Sidebar;