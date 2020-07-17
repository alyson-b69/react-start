import React from "react"
import "./Redux.css"

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

            <p>Paragraphe d'introduction ...</p>

            <h3>Sous titre</h3>
            <p>Blablabla</p>

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