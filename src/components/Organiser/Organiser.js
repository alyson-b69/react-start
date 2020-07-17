import React from 'react';

function Organiser(){

    return(
        <div className="organiser">
            <h2>Pourquoi et comment organiser son projet React ?</h2>
            <p>Il faut bien l'avouer, lorsqu'on démarre l'apprentissage de React, 
            on se retrouve vite perdu au milieu de cette immense architecture contemporaine. </p>
            <p>Voyons ensemble comment s'organise tout ça...  </p>

            <h3>Pourquoi opter pour une structure de projet ?</h3>
            <p>Pour l'instant, nous ne codons que de mini-applications par le biais de React. Quelques petits fichiers, rien de bien lourd.
            Mais dans quelques mois, nos projets grossiront considérablement. 
            Se concentrer sur l'architecture dès le démarrage, 
            c'est éviter de voir son projet devenir bazar-land au fur et à mesure de son développement.
            Cela permet également d'éviter son effondrement.</p>

            <img src="https://media.giphy.com/media/2ZFuPKWcSw16E/giphy.gif" alt="effondrement d'immeuble"/>
            

            <h3>Le découpage des composants</h3>
            <p>Une étape primordiale dans la gestion d'un projet react, c'est le découpage des composants.</p>
            <p>Il faut </p>
            
            <h3>Quelques approches d'architectures</h3>
            <p>React vous laisse totalement libres dans la manière d'architecturer votre projet. Néanmoins, on retrouve 2 approches relativement populaires :</p>
            <li>Regrouper les fichiers par fonctionnalités / routes.</li>
            <li>Regrouper les fichiers par types.</li>
            <p>Libre à vous d'opter pour l'approche que vous préférez, en accord avec votre équipe de dev.</p>


            <h3>Le nommage des fichiers</h3>
            <cite>"Nommez votre composant en ayant à l'esprit ce qu'il représente." Dan Abramov</cite>
          
            <p>Il est important de donner un nom explicite à vos fichiers, 
            en évitant à tout prix les noms génériques tels que index.js.</p>
            <p>Une simple mais bonne raison : quand vous codez, vous ouvrez fatalement plusieurs fichiers, et si 
            vous utilisez plusieurs index.js, vous avez vite fait de vous emmelez les pinceaux ! </p>
      
            <h3>Le choix de l'extension des fichiers javascript</h3>
            <p>Libre à vous d'utiliser .js ou .jsx pour l'extensions de vos fichiers javascript. 
            Cependant, Facebook semble préconiser d’utiliser .js pour l’extension de vos fichiers.</p>
            <p>Quoi qu'il en soit, restez constant, afin de ne pas avoir du .jsx et du .js au sein d'un même projet.</p>

        </div>
    
    )
    }
    
export default Organiser;