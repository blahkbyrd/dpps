import Imagecard from "./Imagecard";
import { images_list } from "../../data/home_data";

const PictureStrip = (props) =>{

    return(
        <div className="strip-container">
            <ul>{
                    images_list.map(element =>{
                       return (<li className="strip-image" key={element.id}><Imagecard source={element.src} alternative={element.alternative}/></li>)
                    })
                }
                </ul>
        </div>
    )
}

export default PictureStrip;