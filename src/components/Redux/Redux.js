import React from "react";
import "./Redux.css";
import modelFlux from '../../modelFlux.png';

function Redux(){

return(
    <div className="redux">
        <h2>Introduction à Redux</h2>
        <div className="postInfos">
                <div className="row justify-content-around">
                    <div className="metaInfo">
                    <img src="https://github.com/EthernalSlayer/MarkdownCV/blob/master/anonymous02.jpg?raw=true" alt="Guillaume profil" /> 
                    &nbsp; 
                    Guillaume B.
                    </div>
                    <div className="metaInfo">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    &nbsp;
                    17 juillet 2020
                    </div>
                    <div className="metaInfo">
                    <i className="fa fa-hashtag" aria-hidden="true"></i>
                    &nbsp;
                    Découvertes</div>
                </div>
            </div>

            <p>
                Maintenant que tu sais comment organiser ton projet tu pense être sortie d'affaire. Hélas les choses ne sont pas si simple comme tout les Devs React avant toi quand ton application va grossir et se complexifier tu rencontrera un problème. Un problème tout simple et qui pourtant a mener certain projets à leur perte, ce problème est la gestion d'un état partagé par plusieurs composants isolés les uns des autres.
            </p>

            <h3>La naissance de Redux</h3>
            <p>Pour comprendre la naissance de Redux il faut remonter un peu en arrière quand tout le monde se basait encore sur le modèle MVC(model vue controller) ou ses dérivés... Quand facebook a sortit React beaucoup de devs ont rencontré le problème citer dans l'introduction alors la communauté a demandé a facebook s'il n'avait pas une solution a apporter au problème. Facebook a alors présenter Flux.
            </p>
            <img src={modelFlux} alt="shema du modele Flux" className="fluxImg"></img>
            <p>  
            Flux c'est quoi ? Flux n'est ni un framework, ni une librairie, c'est simplement un modèle d'architecture pour mieux organiser son code React. Seulement Flux est peut être juste un modèle mais il est assez compliqué a mettre en place vu que pour pour chaque projet il fallait créer son propre Flux(oui car Flux nécessite quelques outils a faire soi même pour fonctionner). A cette époque tout le monde créait sa propre librairie Flux et c'était le bordel, jusqu'au jour où Dan Abramov décida de changer les choses en créant Redux
            </p>
            

            <h3>Sous titre</h3>
            <p>Contenue</p>

            <h3>Exemple image</h3>
            <div className="orgImg">
            <img src="https://media.giphy.com/media/2ZFuPKWcSw16E/giphy.gif" alt="effondrement d'immeuble"/>
            </div>


    </div>
    
)

}

export default Redux;