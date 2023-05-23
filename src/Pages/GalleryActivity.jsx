import { useRef } from "react";
import Imagecard from "../Components/Cards/Imagecard";
import { images_list } from "../data/gallery_data";
import { changeClassOfNodeElement} from "../utils_func/utils";


const GalleryActivity = () => {


    const tabs_legend = useRef(null);
    const tabs_image = useRef(null);

    const handleClick = (id, e) => {
       
        // change class of mapped elements
        let current_legend = tabs_legend.current.childNodes;
        let current_image = tabs_image.current.childNodes;
        let targetSibbling = e.target.parentNode.childNodes;
        console.log(current_image);
        changeClassOfNodeElement(current_legend, current_legend[id], "active");
        changeClassOfNodeElement(current_image, current_image[id], "active");
        changeClassOfNodeElement(targetSibbling, e.target, "active");
    }
    return (
        <div className=" page gallery-activity">
            <h3>Quelques activités</h3>
            <div className="gallery-tab-container">
                <div ref={tabs_image} className="image-grid horizontal-scroll"> 
                    {
                        images_list.map(elem => {
                            return (
                                <div onClick={(e) => handleClick(elem.id, e)} className="image-container">
                                <Imagecard key={elem.id} name={elem.name} source={elem.src} alternative={elem.alternative} />
                                <p key={elem.id} className="legend">{elem.legend}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div ref={tabs_legend} className="picture-legend">
                    {
                        images_list.map(elem => {
                            return (
                                <p key={elem.id} className="legend">{elem.legend}</p>
                            )
                        })
                    }
                </div>
                <div className="tab">
                    {
                        images_list.map(elem => {
                            return (
                                <button key={elem.id} onClick={(e) => handleClick(elem.id, e)}>{elem.id + 1}</button>
                            )
                        })
                    }
                    <div className="tab-line"></div>
                </div>
            </div>
        </div>
    )
}

export default GalleryActivity;