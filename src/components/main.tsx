import { useState } from "react";
import Header from "./home/header";
import Styles from '../styles/main.module.css'
import PlayBar from "./home/play-bar";
import Sidebar from "./home/sidebar";
import Home from "./home";
import AgregarPlaylistForm from "./playlist/add-playlist";

type ItemList = {
    title: string;
    description: string;
    image: string;
}

function Main() {
    const [list, setList] = useState<ItemList[]>([]);

    const [showform, setShowForm] = useState(false);
    return (
        <main className={Styles.main}>
            
            <Header />
            {!showform ?
            (
            
            <Home/>

            ) : (
            
            <AgregarPlaylistForm list={setList} setshowForm={setShowForm}/>
            
            )
            }

            <Sidebar onToggleForm={setShowForm} list={list}/>
            <PlayBar />
  

        </main>
    );
}

export default Main;