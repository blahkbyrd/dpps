
import Secondarybutton from "../Buttons/Secondarybutton";
import icon from "../../Assets/images/logo-creme.png";

const Sticker = (props) => {
    const scale = props.scale;
    const linkToHelloAsso = (e) => {
        e.preventDefault();
        console.log("go to hello asso");
    }
    return (
        <div className="sticker-container">
            <h4>rejoindre la meute !</h4>
            {
                scale === "big" &&

                <span>sur</span>
            }
            <div className="btn-container">
                <Secondarybutton action={linkToHelloAsso} content="hello asso" />
                <img className="icon" src={icon} alt="icon emprunte d'animal" />
                <img className="icon" src={icon} alt="icon emprunte d'animal" />
            </div>
            {
                scale === "big" &&

                <p> C’heloù endervezh leun hor, Eusa. Piv farsus e wrierez,
                    micherour. Berrloer Pempont mont anezhi, yaou. Dirak drezomp dezho ur, atav</p>
            }
        </div>
    )
}

export default Sticker;