import { useState } from "react";
import { motion } from "framer-motion";


import ImageAtCenter from "./articles-layout/ImageAtCenter";
import SimpleGrid from "./articles-layout/SimpleGrid";
import CardsGrid from "./articles-layout/CardsGrid";

const DropDownArticle = (props) => {
    const component = props.layout;
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
        console.log(isActive);
    }
    const drop_variants = {
        open: {opacity:1, height: 'fit-content' },
        closed: { opacity:0, height: 0 }
    }
    return (

        <motion.div
            initial={false}
            animate={isActive ? "open" : "closed"}

            className="drop-down-article-container">
            <motion.h4 
            className={isActive ? "active" : ""}
            onClick={handleClick}>{props.title}</motion.h4>

            <motion.div 
            variants={drop_variants}
            transition={{duration:1}}
            className="drop-down-article-content">
                {
                    component === "image-center" && (
                        <ImageAtCenter state={isActive}/>
                    )

                }
                {
                    component === "falling-bubbles" && (
                        <CardsGrid state={isActive}/>
                    )
                }
                {
                    component === "simple-grid" && (
                        <SimpleGrid state={isActive}/>
                    )
                }
            </motion.div>
        </motion.div>
    )
}


export default DropDownArticle;