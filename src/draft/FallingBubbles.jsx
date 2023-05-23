import { animate, stagger, timeline } from "motion";
import { useEffect, useRef } from "react";
import { selectChildNodeElement } from "../../utils_func/utils";

const FallingBubbles = (props) => {
    const bubble_container = useRef(null);
    let offset = 0;
    useEffect(() => {
        const bubbles_array = selectChildNodeElement(bubble_container);
        const sequence = [];
        for (let i = 0, j = 1; i <= 7; i++, j++) {
            let degree = (360 / 8)
            let positionY = Math.cos(degree * j) * 160;
            let positionX = Math.sin(degree * j) * 160;
            const posX = (`${positionX}px`);
            const posY = (`${positionY}px`);
            console.log(bubbles_array.length);

            const sequence_part = [bubbles_array[i], { x: posX, y: posY }, { duration: 1 }]
            sequence.push(sequence_part);
        }
        animate(".falling-bubble-layout-container",
            {
                scale: [0.1, 1]
            },
            {
                duration: 1.5
            }
        )
        
        // timeline(sequence, { duration: 4 })
    }, [])

    return (
        <div ref={bubble_container} className="falling-bubble-layout-container">
            <div className="bubbles">
                <p>Soutien aux personnes isolées</p>
            </div>
            <div className="bubbles">
                <p>Aide à l’expression des émotions</p>
            </div>
            <div className="bubbles">
                <p>Lutte contre l’exclusion</p>
            </div>
            <div className="bubbles">
                <p>Aide à la communication</p>
            </div>
            <div className="bubbles">
                <p>Soulagement des souffrances</p>
            </div>
            <div className="bubbles">
                <p>Sensibilisation et pédagogie</p>
            </div>
            <div className="bubbles">
                <p>Stimulation motrice et cognitive</p>

            </div>
            <div className="bubbles">
                <p>Entretien et développement de l’autonomie</p>
            </div>
            <div className="bubbles">
                <p>Apport de bien-être</p>
            </div>
        </div>
    )
}

export default FallingBubbles;