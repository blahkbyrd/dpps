import Primarybutton from "../Components/Buttons/Primarybutton";
import Textcard from "../Components/Cards/Textcard";
import PictureStrip from "../Components/Cards/pictureStrip";




const Home = () => {
    const title = "Qu’est - ce que la médiation par l’animal ?"
 


    const handleClick = () => {
        console.log("click !");
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
                <Primarybutton action={handleClick} content="contact" />
            </div>
        </div>
    )
}


export default Home;