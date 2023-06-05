import people from "../../Assets/images/public.png";
import people_mob from "../../Assets/images/public_mob.png";
import { info_data } from "../../data/info_data";
import { selectChildNodeElement } from "../../utils_func/utils";

import { useEffect, useRef, useState } from "react";
import { animate, useAnimate } from "framer-motion"
import useMediaQuery from '@mui/material/useMediaQuery'

const ImageAtCenter = (props) => {
    const anim = props.state;

    const content = info_data;
    const drop = useRef(null);
    const container = useAnimate();
    const intro = useAnimate();
    const image = useRef(null);

    // mediaqueries
    const matches = useMediaQuery('(min-width:1300px');
    
    const image_src = matches ? people : people_mob;
    //animations
    useEffect(() => {

      const children = selectChildNodeElement(container)
    if(matches && anim){
        animate(".intro", {y:0, opacity:1}, {duration:0.5})
        animate(children[0], {x:50, opacity:1}, {delay:0.5, duration:2})
        animate(children[1], {x:100, opacity:1}, {delay:1, duration:2})
        animate(children[2], {x:150, opacity:1}, {delay:1.5, duration:2})
      }
      else if(!matches && anim){
        animate(".intro", {y:0, opacity:1}, {duration:0.5})
        animate(children[0], {x:0, opacity:1}, {delay:0.5, duration:1})
        animate(children[1], {x:0, opacity:1}, {delay:1, duration:1})
        animate(children[2], {x:0, opacity:1}, {delay:1.5, duration:1})
      }
      else{
        animate(".intro", {y:"-100%", opacity:1}, {duration:0.5})
        animate(children[0], {x:"300%", opacity:0}, {delay:1,duration:1})
        animate(children[1], {x:"300%", opacity:0}, {delay:1,duration:1})
        animate(children[2], {x:"300%", opacity:0}, {delay:1,duration:1})
      }
    }, [anim])

    return (
        
        <div ref={drop} className="image-center-layout-container">
          
            <p ref={intro} className="intro">{content.intro}</p>
            <img ref={image} src={image_src} alt={content.illustration.alt} />

            <div ref={container} className="parent">
                {
                    content.sections.map(elem => {
                        return (
                            <div key={elem.id} className="children">
                                <h5>{elem.title}</h5>
                                {
                                    elem.content.map((el, id) => {
                                        return (
                                            <div key={id}>{el}</div>)
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ImageAtCenter;