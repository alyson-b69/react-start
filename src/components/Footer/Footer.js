import React from 'react';
import './Footer.css';

function Footer(){

return(
    <div className="footer">
        <div className="footerLinks">
        <h3>Liens utiles</h3>
        <a href="https://fr.reactjs.org/" alt="Documentation officielle de React">Documentation officielle de React</a>

        <a href="https://fr.reactjs.org/" alt="lien">Lien</a>
        </div>
        
        <div className="footerInfos">
        <p>Réalisé avec <span role="img" aria-label="love">❤️</span></p>
        <p>By <a href="https://www.linkedin.com/in/alyson-bernabeu-08249a172/" alt="profil Linkedin d'Alyson">Alyson</a> & <a href="https://www.linkedin.com/in/guillaume-bento-aires-7623071a3/" alt="profil Linkedin de Guillaume">Guillaume</a></p>
        </div>
        
    </div>

)
}

export default Footer;