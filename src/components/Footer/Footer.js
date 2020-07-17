import React from 'react';
import './Footer.css';

function Footer(){

return(
    <div className="footer">
        <div className="footerLinks">
        <h3>Liens utiles</h3>
        <a href="https://fr.reactjs.org/" alt="Documentation officielle de React" target="_blank" rel="noopener noreferrer">Documentation officielle de React</a>

        <a href="https://overreacted.io/" alt="Blog de Dan Abramov" target="_blank" rel="noopener noreferrer">Blog de Dan Abramov</a>
        </div>
        
        <div className="footerInfos">
        <h3>Crédit</h3>
        <p>Réalisé avec <span role="img" aria-label="love">❤️</span></p>
        <p>By <a href="https://www.linkedin.com/in/alyson-bernabeu-08249a172/" alt="profil Linkedin d'Alyson" target="_blank" rel="noopener noreferrer">Alyson</a> & <a href="https://www.linkedin.com/in/guillaume-bento-aires-7623071a3/" alt="profil Linkedin de Guillaume" target="_blank" rel="noopener noreferrer">Guillaume</a></p>
        <a href="https://www.wildcodeschool.com/fr-FR" alt="Wild Code school" target="_blank" rel="noopener noreferrer">
        <img className="wild" src="https://res.cloudinary.com/wildcodeschool/image/upload/c_fill,h_50/v1/static/irjoy97aq0eol8bf6959" alt="logo wild"/>
        </a>
        </div>
        
    </div>

)
}

export default Footer;