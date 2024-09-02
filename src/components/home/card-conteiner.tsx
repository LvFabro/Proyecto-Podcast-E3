import { ReactNode } from "react";
import styles from '../../styles/card-conteiner.module.css'

type CardConteinerProps = {
    title? : String,
    children? : ReactNode,
    text? : String
};

function CardConteiner( {title, children, text} : CardConteinerProps ) {
    return (
        <section>
           <div className={styles.card}>
                <img className="avatar" 
                    src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" 
                    alt="pepe-veraz"
                    width={50}
                    height={50} />
                <div className={styles.title}>
                    <p>{text}</p>
                    <h2>{title}</h2>
                </div>
            </div>
                {children}
                <div>
                    <br />
                </div>     
        </section>
        
    );
}

export default CardConteiner;