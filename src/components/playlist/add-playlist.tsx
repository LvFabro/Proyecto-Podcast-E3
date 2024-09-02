import { useState } from 'react';
import styles from '../../styles/add-playlist.module.css'

type ItemList = {
    title: string;
    description: string;
    image: string;
}

type FormProps = {
    list: React.Dispatch<React.SetStateAction<ItemList[]>>;
    setshowForm: React.Dispatch<React.SetStateAction<boolean>>;
}


function AgregarPlaylistForm(props: FormProps) {
    
    const [playlist, setPlaylist] = useState<ItemList>({
        title: '',
        description: '',
        image: ''
    });


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.list((prevState) => [...prevState, playlist]);
        props.setshowForm(false);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setPlaylist({
            ...playlist,
            [name]: value
        });
    }

    return (
        <section className={styles.fields}>
            <div>

            <h1>Creá tu playlist</h1>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Título</label>
                <input type="text"
                name='title'
                value={playlist.title}
                onChange={handleChange}
                required={true}
                />

                <label htmlFor="description">Descripción</label>
                <input type="text"
                name='description'
                value={playlist.description}
                onChange={handleChange}
                required={true}
                />

                <label htmlFor="image">Imagen</label>
                <input
                type="text"
                placeholder='Url de imagen'
                name='image'
                value={playlist.image}
                onChange={handleChange}
                required={true}
                />

                <button type='submit'>Agregar Playlist</button>
            </form>
            {playlist.title && (
                <div className={styles.render}>
                    <img src={playlist.image} alt="" />
                    <p>{playlist.title}</p>
                    <p>{playlist.description}</p>
                </div>
            )}
            </div>
            
        </section>

    );
}

export default AgregarPlaylistForm;
