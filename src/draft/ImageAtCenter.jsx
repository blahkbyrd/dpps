import people from "../../Assets/images/people.png";
import { info_data } from "../../data/info_data";
import { selectChildNodeElement } from "../../utils_func/utils";

import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";

const ImageAtCenter = (props) => {
    const content = info_data;
    const drop = useRef(null);
    const container = useRef(null);
    const intro = useRef(null);
    const image = useRef(null);

    //animations
    useEffect(() => {
        const child_array = selectChildNodeElement(container);
        const intro_text = intro.current;

        animate(intro_text,
            {
                y:["-100%","0"],
                opacity: [0,1],
            },
            {
                duration: 1,
                
            });

        animate(child_array[0],
            {
                x: ["-200%", "0"],
                opacity:[0,1]
            },
            {
                duration:1,
                delay:1
            }
        );
        animate(child_array[1],
            {
                x: ["200%", "0"],
                opacity:[0,1]
            },
            {
                duration:1,
                delay:1
            }
        );
        animate(child_array[2],
            {
                y: ["200%", "0"],
                opacity:[0,1]
            },
            {
                duration:1,
                
            }
        );
    }, [])

    return (
        <div ref={drop} className="image-center-layout-container">
            <p ref={intro} className="intro">{content.intro}</p>
            <img ref={image} src={people} alt={content.illustration.alt} />

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