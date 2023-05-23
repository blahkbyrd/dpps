import DropDownArticle from "../Components/DropDownArticle";
import infographie from "../Assets/images/infographie.png";
import Article from "../Components/Article";
import Primarybutton from "../Components/Buttons/Primarybutton";


const Infos = () => {
  const action_1 = () => {}
    return (
        <div className="page infos" id="infos">
          <h3>La médiation par l'animal, dans le détail</h3>
          <div className="intro-container">
            <Article/>
            <img src={infographie} alt="infographie relation triadique"  className="intro-illustration"/>
          </div>
          <DropDownArticle layout="image-center" title="A qui s’adresse la médiation par l’animal ?"/>
          <DropDownArticle  layout="falling-bubbles" title="Qelques bienfaits"/>
          <DropDownArticle layout="simple-grid" title="Les ateliers des Patounes"/>
          <div className="cta-contact">
            <h4>Vous êtes intéressé ?</h4>
            <div className="button-container">
                <Primarybutton action={action_1} content="+ d'infos" />
            </div>
          </div>
        </div>
    )
}

//export default Infos;