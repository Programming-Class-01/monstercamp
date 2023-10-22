import { getRandomIntInclusive } from "./utilities.js";
import { Ok, Err, Result} from "ts-results"
import { v4 as uuidv4 } from "uuid"

function uuidGen(): string {
    return uuidv4();
}
function birthdayGen(): Date {
    return new Date()
}
// This function will need an array or enum of ***valid*** names to select at random.
//TODO: REPLACE THE NUMBER HERE WITH THE CORRECT TYPE AFTER IT IS DEFINED. jEsUs ChRiSt DO NOT SKIP THIS TODO!!
function nameGen(): Result<number, Error> {
    const name = getRandomIntInclusive(12, 0);
    if (name.err) return Err(new Error("getRandomIntInclusive returned an error. Verify array"));
    const result = name.val
    if (!result) return Err(new Error(`undefined, check your data for integrity`))
    return Ok(result);
}
enum elements {
    earth = `Earth`,
    wind = `Wind`,
    water = `Water`,
    energy = `Energy`,
    fire = `Fire`,
    spirit = `Spirit`,
    shadow = `Shadow`,
    nature = `Nature`
}

//  {Stamina, Stability, Resilience, fertility(for breeding purposes), teamwork}
enum stats {
    strength = 'Strength',
    teamwork = 'Teamwork',
    mutationStability = 'Mutation Stability',
    fertility = ' Fertility',
    stamina = 'Stamina',
    cuteness = 'Cuteness',
    intelligence = 'Intelligence',
}

enum species {
    turtleduck = 'Turtleduck',
    duck = 'Duck',
    turtle = 'Turtle',
    boar = 'Boar',
    hound = 'Hound',
    boarhound = 'Boarhound',
    chicken = 'Chicken',
    hawk = 'Hawk',
    chickenhawk = 'Chickenhawk',
    squirrel = 'Squirrel',
    eel = 'Eel',
    squirreel = 'Squirreel',
    salamander = 'Salamander',
    firebird = 'Firebird',
    dragon = 'Dragon',
    owl ='Owl',
    bat = 'Bat',
    owlbat = 'Owlbat',
    rabbit = 'Rabbit',
    deer = 'Deer',
    rabbideer = 'Rabideer',
    cat = 'Cat',
    fox = 'Fox',
    catfox = 'Catfox',
}s


export {uuidGen}
export {birthdayGen}
export {nameGen}
export {elements}
export {stats}
export {species}