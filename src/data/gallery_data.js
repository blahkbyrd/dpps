import fake1 from "../Assets/images/fake1.png";
import fake2 from "../Assets/images/fake2.png";
import fake3 from "../Assets/images/fake3.png";

import eddu from "../Assets/images/eddu_profile.jpg";

import breizh from "../Assets/images/breizh_profile.jpg";
import macchiato from "../Assets/images/macchiato_profile.jpg";
import drop from "../Assets/images/drop.png";
import leaf from "../Assets/images/leaf.png";

import bone from "../Assets/images/bone.png";
import carot from "../Assets/images/carrot.png";


const images_list = [{
    id: 0,
    name: "fake1",
    legend: "créer du contenu pour le compte Onlyfan de la maitresse",
    alternative: "mediation activité",
    src: fake1
},
{
    id: 1,
    name: "fake2",
    legend: "Faire des paris sportifs",
    alternative: "mediation activité",
    src: fake2
},
{
    id: 2,
    name: "fake3",
    legend: "apprendre à un chien à lire l’heure",
    alternative: "mediation activité",
    src: fake3
}
]

const animals_lists = [
    {
        id: 0,
        name: "Eddu",
        icon:drop,
        type: "chien",
        features: ["Labrador chocolat", "poids: 20kg"],
        content: [
            { title: "Logoden", content: "Logoden biniou degemer mat, an." }
        ],
        abstract: "Gourc’hemennoù Skos koll kenavo, bemnoz.",
        weakness:"kenavo",
        weakness_ico: bone,
        alternative: "chien",
        src: eddu
    },
    {
        id: 1,
        name: "Breizh",
        icon:leaf,
        type:"lapin",
        features: ["Papillon géant", "poids: 1.5kg"],
        content: [
            { title: "Logoden" ,  content: "Logoden biniou degemer mat, an." },
            { title: "Logoden" ,  content: "Logoden biniou degemer mat, an." },
        ],
        abstract: "Envel seitek gwin dud, pegeit.",
        alternative: "lapins",
        weakness:"kenavo",
        weakness_ico:carot,
        weakness_alt:"ico",
        src: breizh
    },
    {
        id: 2,
        name: "Macchiato",
        icon:leaf,
        type:"lapin",
        features: ["Papillon géant", "poids: 1.5kg"],
        content: [
            { title: "Logoden",content: "Logoden biniou degemer mat, an." },
        ],
        abstract: "Logoden biniou degemer mat, an.",
        alternative: "lapins",
        weakness:"kenavo",
        weakness_ico:carot,
        weakness_alt:"ico",
        src: macchiato
    },
]
export {
    images_list,
    animals_lists
}