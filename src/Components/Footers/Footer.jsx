import Sticker from "../Cards/Sticker";
import Logo from "../Headers/Logo";


const Footer = () => {
    return (
        <footer className="footer">
           <section className="top">
               <div className="brand">
                <div className="brand-name">
                    <Logo color="creme"/>
                    <p>Médiation par l'animal</p>
                </div>
                <ul className="contact-infos">
                    <li><a href="mailto:despatounespourunsourire@gmail.com">despatounespourunsourire@gmail.com</a></li>
                    <li>2 rue des Vergnes, 85600 Montaigu-Vendée</li>
                    <li>06 75 43 27 16</li>
                </ul>
               </div>
               <div className="site-map">
                <h5>Plan du site</h5>
                <ul>
                    <li>accueil</li>
                    <li>activités</li>
                    <li>infos</li>
                    <li>nos animaux</li>
                    <li>contact</li>
                    <li><a href="hello-asso.org" rel="noreferrer" target="_blank">nous rejoindre</a></li>
                </ul>
               </div>
               <Sticker/>
           </section>
           <section className="bottom">
            <ul>
                <li>Des patounes pour un sourire</li>
                <li>SIRET : 92321360800016</li>
                <li>Formée par l'institut <a href="http://www.agatea.org/" rel="noreferrer" target="_blank">AGATEA</a></li>
            </ul>
            <ul>
                <li>mentions légales</li>
                <li>CGV</li>
            </ul>
            <p>site réalisé par <a href="https://github.com/blahkbyrd" rel="noreferrer" target="_blank">Blahkbyrd</a></p>
            <p>back to top</p>
           </section>
        </footer>
    )
}

export default Footer;

