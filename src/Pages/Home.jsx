import Primarybutton from "../Components/Buttons/Primarybutton";
import Secondarybutton from "../Components/Buttons/Secondarybutton";
import Imagecard from "../Components/Cards/Imagecard";
import Textcard from "../Components/Cards/Textcard";

import eddu from "../Assets/images/eddu.JPG";
import breizh from "../Assets/images/breizh.jpg";
import macchiato from "../Assets/images/macchiato.jpg";

const Home = () => {
    const content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, aut, voluptatum, dignissimos porro corporis adipisci deserunt distinctio modi vel odio tempora unde culpa dolorem voluptatem cumque? Excepturi optio quia minus!"
    
    const action_1 = () => {
        console.log("click !");
    }

    const action_2 = () => {
        console.log("Another button");
    }
    
    return (
        <div className="home" id="home">
            <aside>
                <ul>
                    <li><Imagecard source={eddu} alternative="chien"/></li>
                    <li><Imagecard source={breizh} alternative="lapin"/></li>
                    <li><Imagecard source={macchiato} alternative="lapin"/></li>
                </ul>
            </aside>
            <main>
            <Textcard title="Titre" content={content} />
            <div className="button-container">
                <Primarybutton action={action_1} content="+ d'infos"/>
                <Secondarybutton action={action_2} content="prendre rdv"/>
            </div>
            </main>
        </div>
    )
}


export default Home;