import logo from '../../Assets/images/logo-bleu.png';


const FlipCard = (props) => {
   
    return (
        <div className={`${props.state ? "rotate-cards" : ""} cards`}>
            <div className="inner-card">
                <div className="front">
                    <img src={logo} alt="logo" />
                </div>
                <div className="back">
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default FlipCard;