import { v4 as uuidv4 } from "uuid"
import { Ok, Result, Err } from "ts-results"
import { uuidGen } from "./creature.js"
import { birthdayGen } from "./creature.js"
import { nameGen } from "./creature.js"
import { elements } from "./creature.js"
import { stats } from "./creature.js"
import { species } from "./creature.js"


interface ICreature {
    uuid: string
    name: string
    species: string
    birthdate: Date
    stats: number
}

interface ISpecies {
    species: string
    type: elements
    baseStats: [strength: number, teamwork: number, mutationStability: number, fertility: number, stamina: number, cuteness: number, intelligence: number]
}


function generateCreature(): ICreature {
    return {
        uuid: uuidv4(),
        name: "",
        species: "",
        birthdate: new Date(),
        elementValues: {
            Earth: Math.random(),
            Wind: Math.random(),
            Water: Math.random(),
            Energy: Math.random(),
            Fire: Math.random(),
            Spirit: Math.random(),
            Shadow: Math.random(),
            Nature: Math.random(),
        },
        type: ,
        skills: "",
        stats: 0,
        happiness: 0,
    }
}

function printCreature(creature: ICreature): void {
    console.log(`${creature.name}`);
}
let creature = generateCreature(

)

printCreature(creature)