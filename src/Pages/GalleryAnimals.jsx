import AnimalsCard from '../Components/Cards/AnimalsCard';
import { animals_lists } from '../data/gallery_data';

const GalleryAnimals = (props) => {
    const content = animals_lists;

    return (
        <div className="page gallery-animals">
            <h3>Nos animaux</h3>
            <div className="gallery-animals-container">
                {
                    content.map(el => {
                        return (
                           <AnimalsCard
                           key={el.id}
                           features={el.features}
                            content={el.content}
                            type={el.type}
                            name={el.name}
                            icon={el.icon}
                            img_src={el.src}
                            img_alt={el.alternative}
                            weakness={el.weakness}
                            weakness_alt={el.weakness_ico}
                            weakness_icon={el.weakness_ico}
                            abstract={el.abstract}
                           />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default GalleryAnimals;