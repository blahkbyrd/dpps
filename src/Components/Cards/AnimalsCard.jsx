import { useState, useRef } from "react"
import logo from '../../Assets/images/logo-creme.png';
import SplitType from 'split-type';
import CircleText from "../CircleText";


const AnimalsCard = (props) => {
    const [flip, setFlip] = useState(false);

    // split 
    const splittedText = new SplitType(".split");


    const handleClick = () => {
        setFlip(!flip);
    }


    const features = props.features;
    const content = props.content;


    return (
        <div onClick={handleClick} className={`${flip ? "rotate-cards" : ""} cards`}  >
            <div className="inner-card">
                <div className="front">
                    <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        
                        className={`${flip ? "no-rotate" : "rotate"} circle-svg`}>
                        <circle id="circle-path" fill="none" cx="50" cy="50" r="35" />
                        <text>
                            <textPath href="#circle-path"
                                className="text-path"
                            >
                                Des patounes  pour un sourire
                            </textPath>
                        </text>
                    </svg>

                    <img src={logo} alt="logo" />
                   
                </div>
                <div className="back">
                    <div className="header-card">
                        <p>{props.type}</p>
                        <h5>{props.name}</h5>
                        <img className="icon" src={props.icon} alt="icone" />
                    </div>
                    <div className="image-container">
                        <img className="animal-img" src={props.img_src} alt={props.img_alt} />
                        <ul className="features-list">
                            {features.map(el => {
                                return (
                                    <li>{el}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="content">
                        {content.map(el => {
                            return (
                                <div>
                                    <h6>{el.title}</h6>
                                    <p>{el.content}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="footer-card">
                        <p className="weakness">faiblesse : <span>{props.weakness}</span></p>
                        <img className="icon" src={props.weakness_icon} alt={props.weakness_alt} />
                        <p className="abstract">{props.abstract}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AnimalsCard;
