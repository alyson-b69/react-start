import React from 'react';
import './Home.css'

function Home(){

    return(
        <div className="home">
            <h2>Welcome to React Start</h2>
            <p>Bienvenue à toi jeune apprenti Reacteur.</p>
            <p>Nous avons créé ce petit site pour t'apporter quelques petites informations bien utiles quand on démarre l'apprentissage de React JS.</p>
            <p>Installe-toi confortablement, et bonne lecture !</p>
            <br/>
            <img src="https://xbsoftware.com/wp-content/uploads/2019/03/react-js-pict.png" alt="React illustration"/>
            <br/>
            <span>Crédit illustration : <a href="https://xbsoftware.com" alt="site de xbsoftware">xbsoftware.com</a></span>
        </div>
    
    )
    }
    
export default Home;