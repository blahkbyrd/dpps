
import { animate, useAnimate } from "framer-motion";
import { selectChildNodeElement } from "../../utils_func/utils";

import { benefits_data } from "../../data/info_data";
import FlipCard from "../Cards/FlipCard";

const CardsGrid = (props) => {
    const cardContainer = useAnimate();
    const benefits = benefits_data;


    return (
        <div ref={cardContainer} className="card-grid-layout-container">
            {benefits.map(elem=>(
                <FlipCard key={elem.id} content={elem.content} state={props.state}/>
            ))}
       
        </div>
    )
}

export default CardsGrid;