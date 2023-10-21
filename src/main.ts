import { v4 as uuidv4 } from "uuid"
import { Ok, Result, Err } from "ts-results"
console.log("Hello Dev");

function uuidGen(): string {
    return uuidv4();
}

// https://www.w3schools.blog/date-object-typescript links to a pretty good source of info 
//      on the date constructor.
function birthdayGen(): Date {
    return new Date()
}

function getRandomIntInclusive(max: number, min = 1): Result<number, Error> {
    if (max > Number.MAX_SAFE_INTEGER || max < 0) {
        return Err(new Error(`maximum integer size exceeded or maximum set to less than zero.`))
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    const range = max - min + 1
    return Ok(Math.floor(Math.random() * range + min));

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



const name = nameGen();
const birthday = birthdayGen();
const uuid = uuidGen();

const monster = {
    name,
    birthday,
    uuid
}

console.log(monster);