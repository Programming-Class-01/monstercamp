import { getRandomIntInclusive } from "./utilities.js";
import { v4 as uuidv4 } from "uuid";
import { Result } from "ts-results";
import pkg from 'ts-results';
const { Ok, Err } = pkg;

function uuidGen(): string {
    return uuidv4();
}
function birthdayGen(): Date {
    return new Date()
}
// This function will need an array or enum of ***valid*** names to select at random.
//TODO: REPLACE THE NUMBER HERE WITH THE CORRECT TYPE AFTER IT IS DEFINED. jEsUs ChRiSt DO NOT SKIP THIS TODO!!
function speciesGen(): Result<number, Error> {
    const name = getRandomIntInclusive(12, 0);
    if (name.err) return Err(new Error("getRandomIntInclusive returned an error. Verify array"));
    const result = name.val
    if (!result) return Err(new Error(`undefined, check your data for integrity`))
    return Ok(result);
}

const creature = {
    uuid: uuidGen(),
    birthdate: birthdayGen(),
    species: speciesGen().unwrapOr(() => {
        console.error(`speciesGen failed, no valid species found`)
        process.exit(1)
    }),
}

export {creature}
