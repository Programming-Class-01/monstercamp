import { getRandomIntInclusive } from "./utilities.js";
import { v4 as uuidv4 } from "uuid";
import { Result } from "ts-results";
import pkg from 'ts-results';
const { Ok, Err } = pkg;

function uuidGen(): string {
    return uuidv4()
}

function birthdayGen(): Date {
    return new Date()
}

interface ISpecies {
    speciesName: string
}

const speciesArray: ISpecies[] = [
    { speciesName: `turtle` },
    { speciesName: `duck` },
    { speciesName: `turtleduck` },
    { speciesName: `boar` },
    { speciesName: `hound` },
    { speciesName: `boarhound` },
    { speciesName: `chicken` },
    { speciesName: `hawk` },
    { speciesName: `chickenhawk` },
    { speciesName: `squirrel` },
    { speciesName: `eel` },
    { speciesName: `squirreel` },
    { speciesName: `salamander` },
    { speciesName: `firebird` },
    { speciesName: `dragon` },
    { speciesName: `owl` },
    { speciesName: `bat` },
    { speciesName: `owlbat` },
    { speciesName: `rabbit` },
    { speciesName: `deer` },
    { speciesName: `rabbideer` },
    { speciesName: `cat` },
    { speciesName: `fox` },
    { speciesName: `catfox` },
]

function speciesGen(speciesArray: ISpecies[]): Result<ISpecies, Error> {
    const speciesIndex = getRandomIntInclusive(speciesArray.length - 1);
    if (!speciesIndex.ok) {
        return Err(new Error("getRandomIntInclusive returned an invalid output, verify speciesArray."))
    }
    const result = speciesArray[speciesIndex.val]
    if (!result) { 
        return Err(new Error(`speciesArray at ${speciesIndex.val} is undefined. Check array integrity`))
    }
    return Ok(result)

}

interface ICreature {
    uuid: string,
    birthdate: Date,
    species: ISpecies,
    hunger: {
        fullness: number,
        satiation: number
    }
}

function creatureBuilder(): Result<ICreature, Error> {
    const uuid = uuidGen();
    const birthdate = birthdayGen();
    const speciesRaw = speciesGen(speciesArray)
    if (!speciesRaw.ok) return Err(new Error("speciesGen returned an error, verify data input"))
    const species = speciesRaw.val
    const hunger = {
        fullness: 10, 
        satiation: 10
    }

    return Ok({
        uuid,
        birthdate,
        species,
        hunger
    })
}

export { creatureBuilder }
