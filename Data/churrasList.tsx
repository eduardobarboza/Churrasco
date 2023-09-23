import { ImageProps } from "react-native";

export interface Churras {
    name: string;
    image: ImageProps["source"];
    description: string;
}

const convidado = require(".../assets/convidado.png");
const carne = require(".../assets/carne.png");
const cerveja = require(".../assets/cerveja.png");
const refrigerante = require(".../assets/refrigerante.png");

export const churrasList: Churras[] = [{
    name: "convidado",
    image: convidado,
    description: "1",
},
{
    name: "carne",
    image: carne,
    description: "400 GR", 
},
{
    name: "cerveja",
    image: cerveja,
    description: "4 LATAS",
},
{
    name: "refrigerante",
    image: refrigerante,
    description: "400 ML"
    },
];