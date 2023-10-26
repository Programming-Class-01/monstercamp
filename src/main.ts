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
    elementValues: {
        Earth: number,
        Wind: number,
        Water: number,
        Energy: number,
        Fire: number,
        Spirit: number,
        Shadow: number,
        Nature: number,
    },
    type: string
    skills: string
    happiness: number
}

interface ISpecies {
    species: string
    type: elements
    baseStats: [strength: number, teamwork: number, mutationStability: number, fertility: number, stamina: number, cuteness: number, intelligence: number]
}
function generateCreature(): ICreature {
    return {
        uuid: uuidv4(),
        name: "Wilfred",
        // Thinking about making and calling a new function here for species, at least for testing generation purposes
        // I'd love to hear if anybody had any ideas down the road for narrowing down what it gens based on breeding
        // and/or where it's encountered.
        species: species.duck,
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
        // TODO: Figure out how to randomly pick an element type for testing.
        // TODO: Figure out how to handle breeding and what type it will generate.
        type: elements.wind,
        skills: "Those with which one may pay the bills",
        stats: 0,
        happiness: 0,
    }
}

function printCreature(creature: ICreature): void {
    console.log(`====================================
    This Creature is a ${creature.species}.
====================================
Name: ${creature.name}
Date of Birth: ${creature.birthdate}
Type: ${creature.type}
Stats: ${creature.stats}
Current Happiness: ${creature.happiness}
====================================
    Elemental Values:
====================================
Earth: ${creature.elementValues.Earth}
Wind: ${creature.elementValues.Wind}
Water: ${creature.elementValues.Water}
Energy: ${creature.elementValues.Energy}
Fire: ${creature.elementValues.Fire}
Spirit: ${creature.elementValues.Spirit}
Shadow: ${creature.elementValues.Shadow}
Nature: ${creature.elementValues.Nature}
`)}

let creature = generateCreature(

)

printCreature(creature)