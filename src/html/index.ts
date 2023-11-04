async function actuallyJustAPlaceholder(): Promise<ICreature> {
    const response = await fetch("localhost:3000/api/getCreature");
    const creature = await response.json()
    console.log(creature)
    return creature
}

console.log(actuallyJustAPlaceholder())
interface ISpecies {
    speciesName: string
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
