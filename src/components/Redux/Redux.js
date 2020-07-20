import React from "react";
import "./Redux.css";
import modelFlux from '../../modelFlux.png';
import shemaRedux from '../../shemaRedux.jpg';

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
            <p>
                Pour comprendre la naissance de Redux il faut remonter un peu en arrière quand tout le monde se basait encore sur le modèle MVC(model vue controller) ou ses dérivés... Quand facebook a sortit React beaucoup de devs ont rencontré le problème citer dans l'introduction alors la communauté a demandé a facebook s'il n'avait pas une solution a apporter au problème. Facebook a alors présenter Flux.
            </p>
            <img src={modelFlux} alt="shema du modele Flux" className="fluxImg"></img>
            <p>  
                Flux c'est quoi ? Flux n'est ni un framework, ni une librairie, c'est simplement un     modèle d'architecture pour mieux organiser son code React. Seulement Flux est peut  être juste un modèle mais il est assez compliqué a mettre en place vu que pour pour  chaque projet il fallait créer son propre Flux(oui car Flux nécessite quelques outils    a faire soi même pour fonctionner). A cette époque tout le monde créait sa propre  librairie Flux et c'était le bordel, jusqu'au jour où Dan Abramov décida de changer  les choses en créant Redux
            </p>
            

            <h3>Redux qu'est ce que c'est ?</h3>
            <p>
                Redux est une petite librairie Javascript créer par Dan Abramov dans le but de simplifier le management de l'état en le séparant des composants.
            </p>
            <h4>Les 3 principes fondamentaux de Redux:</h4>
            <ol>
                <li>Une unique source de vérité</li>
                <li>l'état est en lecture seule</li>
                <li>les changements d'état sont fait avec des fonctions pures</li>
            </ol>
            <p>
                Expliquons un peu ces 3 principes. <br/>Une unique source de vérité car dans redux votre état se situe dans se qu'on appel un store et celui ci deviendra votre source de vérité pour tous vos composants. Tous vos états seront regroupés dans celui ci et tous vos composants pouront accéder au store. Vous l'aurrez vite compris c'est grâce a cela que Redux règle le problème citer dans l'introduction. Maintenant grâce a Redux vous n'aurrez plus de problème pour partager un état entre plusieurs composants isolés. <br/>L'état est en lecture seule signifie que avec Redux il ne faut pas changer l'état directement. Pour changer l'état il faudra utiliser des actions qui passeront par se qu'on appel un reducer. Quesqu'un reducer me direz vous ? Et bien en faite tu en as surrement déjà croiser en Vanilla JS. T'es tu déjà servi de la méthode ".reduce" de l'objet "Array" en JavaScript ? Et bien cette méthode prend souvent en argument un reducer. Dans notre situation le reducer de Redux est une fonction qui prend en argument l'état actuel et une action et nous renvoie un nouveau état. Voila comment l'on doit changer l'état avec Redux. <br/>Et enfin les changements d'état sont fait avec des fonctions pures (tu as également déjà dut croiser cette notion) sigifie qu'un reducer ne peut être qu'une fonction pure. Pour rappel une fonction pure ne doit pas modifier l'état mais rendre un nouveau état, de plus avec les mêmes paramètres elle doit toujours renvoyer un résultat identique (donc dans les faits sa veut dire que par exemple on ne peut pas utiliser un reducer avec du random car les résultat serait différents a chaque utilisation).
            </p>
            <h4>Shema de Redux:</h4>
            <img src={shemaRedux} alt="shema de Redux" className="shemaReduxImg"></img>

            <h3>Et l'organisation des fichiers dans tout sa ?</h3>
            <p>
                Sur ce point Redux est comme React donc tout se que tu as vue dans "organiser son projet" s'applique ici aussi. Cependant tu dispose de quelques petites choses en plus et tu doit surement te demander où dois je mettre mon store ? ou mettre mes reducers ? ou encore mes actions ? Et bien malheureusement comme pour React il n'y a pas de solution miracle le seul point commun que l'on retrouve a peu près partout c'est l'ajout d'un dossier "store" pour contenir ton store qui sera commun a toute l'application. Pour le reste tu peux sois créer un dossier pour les reducers et un dossier pour les actions ou alors mettre tes reducers et tes actions a l'interieur des fichiers des composants auqels ils sont reliés c'est a toi et ton équipe de décider. Personnelement je conseillerai de mettre les reducers et les actions avec leur composants respectifs mais je n'ai pour l'instant qu'une toute petite experience sur le sujet et aucun gros projets a mon actif donc mon avis changera peut être avec l'expérience.
            </p>

            <h3>Bonus :</h3>
            <ul>
                <li>
                    Le nom de Redux vient de la contraction de deux mots "reducer" et "Flux".
                </li>
                <li>
                    La légende raconte que Dan Abramov serait fan de la série "Charmed" et que le logo de Redux serait inspirer de celui des sorcières Halliwell
                </li>
            </ul>
    </div>
    
)

}

export default Redux;