import React from 'react';
import './Organiser.css';

function Organiser(){

    return(
        <div className="organiser">
            <h2>Pourquoi et comment organiser son projet React ?</h2>
            <div className="postInfos">
                <div className="row justify-content-around">
                    <div className="metaInfo">
                    <img src="https://miro.medium.com/fit/c/160/160/1*BtEzK0FjhA4mr7X5JAmPEQ@2x.jpeg" alt="Alyson profil" /> 
                    &nbsp; 
                    Alyson B.
                    </div>
                    <div className="metaInfo">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    &nbsp;
                    17 juillet 2020
                    </div>
                    <div className="metaInfo">
                    <i className="fa fa-hashtag" aria-hidden="true"></i>
                    &nbsp;
                    Bonnes pratiques</div>
                </div>
            </div>
            <p>Il faut bien l'avouer, lorsqu'on démarre l'apprentissage de React, 
            on peut très rapidement s'égarer au milieu de cette immense architecture contemporaine.</p>
            <p>Commencons par étudier ensemble la structure de base, et adoptons dès à présent les bonnes pratiques...  </p>

            <h3>Un template bien ficellé</h3>
            <p>Lorsque l'on installe la petite bêbête sur nos machines, un dossier avec une multitudes de fichiers est créé. Il s'agit la de la structure de projet initiale.
            </p>
            <p>Cette dernière ne contient ni configuration, ni structures de dossiers compliquées, seulement les fichiers dont vous avez besoin pour créer votre application web.</p>
            <p>Pour que le projet soit généré, ces fichiers doivent exister avec des noms de fichiers exacts :</p>
            <ul>
                <li>public / index.html est le modèle de page;</li>
                <li>src / index.js est le point d'entrée JavaScript.</li>
            </ul>
                
                
            <p>Vous pouvez supprimer ou renommer les autres fichiers.</p>

            <p>Vous pouvez créer des sous-répertoires dans src. Pour des reconstructions plus rapides, 
            seuls les fichiers à l'intérieur de src sont traités par webpack. 
            Vous devez mettre tous les fichiers JS et CSS dans src, sinon webpack ne les verra pas.</p>

            <cite>NB : Seuls les fichiers à l'intérieur de public peuvent être utilisés à partir de public / index.html. </cite>

            <h3>Pourquoi opter pour une structure de projet ?</h3>
            <p>Pour l'instant, nous ne codons que de mini-applications par le biais de React. Quelques petits fichiers, rien de bien lourd.
            Mais dans quelques mois, nos projets grossiront considérablement. 
            Se concentrer sur l'architecture dès le démarrage, 
            c'est éviter de voir son projet devenir <strong>bazar-land </strong> au fur et à mesure de son développement.
            Cela permet également d'éviter son effondrement.</p>
            <div className="orgImg">
            <img src="https://media.giphy.com/media/2ZFuPKWcSw16E/giphy.gif" alt="effondrement d'immeuble"/>
            <br/>
            <span>Crédit Gif : <a href="https://media.giphy.com/media/2ZFuPKWcSw16E/giphy.gif" alt="site Giphy" target="_blank" rel="noopener noreferrer" >Giphy</a></span>
            </div>
            
            
            

            <h3>Le découpage des composants</h3>
            <p>Une étape primordiale dans la gestion d'un projet React, c'est le découpage des composants.
            Grâce à cette étape, vous aurez déjà une idée de la structure de votre application, ce qui vous permettra de
            visualiser plus facilement l'arborescence à venir.
            </p>
            <p>Par exemple, pour une <code>TodoList</code> (la fameuse), on peut imaginer le découpage suivant : </p>
            <div className="orgImg">
            <img src="https://miro.medium.com/max/700/1*7oEqqnISnLtM4I7vUVOOUw.jpeg" alt="découpage de la todoList" />
            </div>

            <h3>Quelques approches d'architectures</h3>
            <p>React vous laisse totalement libres dans la manière d'architecturer votre projet. Néanmoins, on retrouve 2 approches relativement populaires :</p>
            <ul>
            <li>Regrouper / séparer les fichiers par fonctionnalités / routes.</li>
            <li>Regrouper / séprarer les fichiers par types.</li>
            </ul>
            <p>Toujours dans le cadre de la TodoList, voici à quoi pourrait ressembler l'architecture qui regroupe les fichiers par fonctionnalités / routes :</p>
            <div className="orgImg">
            <img src="https://i.imgur.com/hH9ykNq.png" alt="Todolist Arborescence" />
            </div>
            <p>Nous avons dans ce cas précis 2 dossiers :</p>
            <p></p>
            <ul>
                <li>Le dossier containers : Il contient le dossier app, contenant le fichier app qui sert de conteneur à l'application web. </li>
                <br/>
                <cite> "A quoi sert-il ?", pourrez-vous me dire... 
                Et bien je vous invite à lire cet article : <a href="https://medium.com/@learnreact/container-components-c0e67432e005" alt="container components">container components</a> </cite>
                <br />
                <li>Le dossier components : Il contient les dossiers Footer, New Tasks et Task, qui seront appelés dans notre conteneur.</li>
            </ul>

            <p>On retrouve égalements des approches telles que :</p>
            <ul>
            <li>Un seul fichier react</li>
            <li>Regrouper / séprarer les fichiers par domaines</li>
            <li>Et d'autres encore, l'imagination n'a pas de limites ;)</li>
            </ul>

            <p>Vous trouverez sur ce site les diverses structures possibles : <a href="https://www.robinwieruch.de/react-folder-structure" alt="react folder structure">robinwieruch</a></p>

            <p>Libre à vous d'opter pour l'approche que vous préférez, en accord avec votre équipe de dev.</p>


            <h3>Le nommage des fichiers</h3>
            <p className="quote">
            <i className="fa fa-angle-double-left" aria-hidden="true"></i> Nommez votre composant en ayant à l'esprit ce qu'il représente. <i className="fa fa-angle-double-right" aria-hidden="true"></i>

                 <br/> 
                 Dan Abramov</p>
          
            <p>Il est important de donner un nom explicite à vos fichiers, 
            en évitant à tout prix les noms génériques tels que <code>index.js</code>.</p>
            <p>Une simple mais bonne raison : quand vous codez, vous ouvrez fatalement plusieurs fichiers, et si 
            vous utilisez plusieurs <code>index.js</code>, vous avez vite fait de vous emmelez les pinceaux ! </p>
            <p>Question de bonne pratique, il convient d'utiliser la convention de nommage <strong>PascalCase </strong>  
            pour vos composants React : les mots sont liés sans espace, et chaque mot commence par une Majuscule.</p>

            <h3>Le choix de l'extension des fichiers javascript</h3>
            <p>Libre à vous d'utiliser <code>.js</code> ou <code>.jsx</code> pour l'extensions de vos fichiers javascript. 
            Cependant, Facebook semble préconiser d’utiliser <code>.js</code> pour l’extension de vos fichiers.</p>
            <p>Quoi qu'il en soit, restez constant, afin de ne pas avoir du <code>.jsx</code> et du <code>.js</code> au sein d'un même projet.</p>


            

        </div>
    
    )
    }
    
export default Organiser;