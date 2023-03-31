import Primarybutton from "../Components/Buttons/Primarybutton";
import Secondarybutton from "../Components/Buttons/Secondarybutton";
import Imagecard from "../Components/Cards/Imagecard";
import Textcard from "../Components/Cards/Textcard";

import eddu from "../Assets/images/eddu.JPG";
import breizh from "../Assets/images/breizh.jpg";
import macchiato from "../Assets/images/macchiato.jpg";

const Home = () => {
    const images_source = [{
        id:0,
        alternative:"chien",
        src: eddu
    },
    {
        id:1,
        alternative:"lapin",
        src:breizh
    },
    {
        id:2,
        alternative:"lapin",
        src:macchiato
    }
    ]
    const content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, aut, voluptatum, dignissimos porro corporis adipisci deserunt distinctio modi vel odio tempora unde culpa dolorem voluptatem cumque? Excepturi optio quia minus!"

    const action_1 = () => {
        console.log("click !");
    }

    const action_2 = () => {
        console.log("Another button");
    }

    return (
        <div className="home" id="home">
            <aside className="image-container" >
                <ul>{
                    images_source.map(element =>{
                       return (<li key={element.id}><Imagecard source={element.src} alternative={element.alternative}/></li>)
                    })
                }
                </ul>
            </aside>
            <main>
                <Textcard title="Titre" content={content} />
                <div className="button-container">
                    <Primarybutton action={action_1} content="+ d'infos" />
                    <Secondarybutton action={action_2} content="prendre rdv" />
                </div>
            </main>
        </div>
    )
}


export default Home;