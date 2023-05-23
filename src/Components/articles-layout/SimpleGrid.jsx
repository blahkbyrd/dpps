import Primarybutton from "../Buttons/Primarybutton";
import useMediaQuery from '@mui/material/useMediaQuery'

const SimpleGrid = (props) => {
    const matches = useMediaQuery('(min-width:1300px');
    const action_1 = () => {

    }

    const action_2 = () => {

    }
    return (
        <div className="simple-grid-layout-container">
            <div className="simple-grid-col">
                <h5>animations</h5>
                <h6>ponctuelles</h6>
                <p>Les animations sont des séances ponctuelles.
                    L’objectif est de passer un moment agréable tout en découvrant la médiation par l’animal.
                </p>

            </div>
            <div className="simple-grid-col">
                <h5>programmes</h5>
                <h6>hebdomadaires ou bi-mensuels</h6>
                <p>
                    La mise en place d’un programme permet d’élaborer une stratégie, à moyen ou long terme,
                    afin d’atteindre des objectifs fixés par le référant de la structure et l’intervenant
                    en médiation par l’animal.
                </p>

            </div>
            {
                matches &&

                <div className="cta-contact">
                    <p>Vous êtes intéressé ?</p>
                    <div className="button-container">
                        <Primarybutton action={action_1} content="contact" />
                    </div>
                </div>
            }
        </div>
    )
}

export default SimpleGrid;