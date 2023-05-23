
import eddu from "../Assets/images/eddu.JPG";
import breizh from "../Assets/images/breizh.jpg";
import macchiato from "../Assets/images/macchiato.jpg";

const content_list = [{
    id: 0,
    type: "p",
    text: "La médiation par l’animal est une méthode permettant de créer une relation bienfaisante entre les animaux et les humains, dans le respect des règles élémentaires de prudence et de sécurité."
}, {
    id: 1,
    type: "p",
    text: "Dans cette relation, interviennent : ",
},
{
    id: 2,
    type: "ul",
    li: [
        "Un·e intervenant·e en médiation par l’animal et  un·e référent·e interne à la structure où a lieu l’intervention,",
        "Les bénéficiaires ( seul ou en groupe de 3 ou 4 personnes),",
        "Un animal, sélectionné et éduqué pour intervenir en tant qu’animal médiateur."]
},
{
    id: 3,
    type: "em",
    text: "C’est ce que Véronique Servais appelle la relation triadique."
}
]


const images_list = [{
    id: 0,
    alternative: "chien",
    src: eddu
},
{
    id: 1,
    alternative: "lapin",
    src: breizh
},
{
    id: 2,
    alternative: "lapin",
    src: macchiato
}
]


export {
    content_list, images_list
}