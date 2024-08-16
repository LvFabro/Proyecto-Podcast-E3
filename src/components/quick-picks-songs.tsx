import styles from "../styles/quick-picks.module.css"

const recientes = [
    {imagen : 'https://cdns-images.dzcdn.net/images/cover/04a95dd06db9a2941a47b3c730b34a7d/1900x1900-000000-80-0-0.jpg', nombre: 'Ven Conmigo', autor : 'Daddy Yankee'  },
    {imagen : 'https://i.scdn.co/image/ab67616d0000b273a02702f77600ef7f377192e2', nombre : 'Donde estara mi primavera', autor : 'Marco Antonio Solis'  },
    {imagen : 'https://www.rockaxis.com/img/newsList/2525753.jpg', nombre : 'El Loco', autor : 'Babasonicos'  },
    {imagen : 'https://indiehoy.com/wp-content/uploads/2023/10/babasonicos-infame.jpg', nombre : 'Irresponsables', autor : 'Babasonicos'  },
    {imagen : 'https://cdns-images.dzcdn.net/images/cover/b069091e040614b055d98dfd6dd69121/1900x1900-000000-80-0-0.jpg', nombre : 'Melina', autor : 'Camilo Sesto'  },
    {imagen : 'https://i.scdn.co/image/ab67616d0000b27385c354b7655c5fcad5e2ed14', nombre : 'Arrabal Amargo', autor : 'Carlos Gardel'  },
    {imagen : 'https://i.scdn.co/image/ab67616d0000b273246fe4577dcd3ed0b6104379', nombre : 'Cambalache', autor : 'Julio Sosa'  },
    {imagen : 'https://indiehoy.com/wp-content/uploads/2020/04/dr-dre-the-chronic.jpg', nombre : 'Dre Day', autor : 'Dr. Dre'  },
];

function QuickPicksSongs() {
    return (
            <div className={styles.contenedor}>
                {recientes.map((reciente) => {
                    return( 
                        <div className={styles.card}>
                            <img className={styles.img} src={reciente.imagen} />  
                            <div>
                                <p className={styles.name}>{reciente.nombre}</p>
                                <p className={styles.author}>{reciente.autor}</p> 
                            </div>
                        </div>
                    )
                } )}
                <div/>
            </div>   
    );
}
    

export default QuickPicksSongs;