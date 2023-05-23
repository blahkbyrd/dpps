import DropDownArticle from "../Components/DropDownArticle";
import infographie from "../Assets/images/infographie2.png";
import Article from "../Components/Article";
import useMediaQuery from '@mui/material/useMediaQuery'
import Primarybutton from "../Components/Buttons/Primarybutton";


const Infos = () => {
  const matches = useMediaQuery('(min-width:1300px');
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
          {
            !matches &&  <div className="cta-contact">
            <h5>Vous êtes intéressé ?</h5>
            <div className="button-container">
                <Primarybutton action={action_1} content="contact" />
            </div>
        </div>
          }
        </div>
    )
}

export default Infos;