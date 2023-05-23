import Primarybutton from "../Components/Buttons/Primarybutton";
import Secondarybutton from "../Components/Buttons/Secondarybutton";
import Textcard from "../Components/Cards/Textcard";

import PictureStrip from "../Components/Cards/pictureStrip";


const Home = () => {
    const title = "Qu’est - ce que la médiation par l’animal ?"
  

    const action_1 = () => {
        console.log("click !");
    }

    const action_2 = () => {
        console.log("Another button");
    }

    return (
        <div className=" page home" id="home">
            <aside >
                <div className="strips-container">
                    <PictureStrip  />
                    <PictureStrip  />
                    <PictureStrip  />
                </div>
            </aside>
            <article>
                <Textcard title={title} />
            </article>
            <div className="button-container">
                <Primarybutton action={action_1} content="+ d'infos" />
                <Secondarybutton action={action_2} content="prendre rdv" />
            </div>
        </div>
    )
}


export default Home;