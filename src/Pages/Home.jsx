import Primarybutton from "../Components/Buttons/Primarybutton";
import Secondarybutton from "../Components/Buttons/Secondarybutton";
import Imagecard from "../Components/Cards/Imagecard";
import Textcard from "../Components/Cards/Textcard";

const Home = () => {
    const content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, aut, voluptatum, dignissimos porro corporis adipisci deserunt distinctio modi vel odio tempora unde culpa dolorem voluptatem cumque? Excepturi optio quia minus!"
    
    const action_1 = () => {
        console.log("click !");
    }

    const action_2 = () => {
        console.log("Another button");
    }
    
    return (
        <div className="home">
            <aside>
                <ul>
                    <li><Imagecard source="" alternative="image"/></li>
                    <li><Imagecard source="" alternative="image"/></li>
                    <li><Imagecard source="" alternative="image"/></li>
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