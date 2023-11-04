import express from "express"
import { creatureBuilder } from "./creature.js";
// Reminder: We need at LEAST two views. 
const creature = creatureBuilder()
const app = express()
const port = 3000

app.use(express.static('./build/html'))

app.get('/api/getCreature', (_req, res) => {
    res.json(creature.val);
})


app.listen(port, () => {
    console.log(`Hey man, I'm just listening on port ${port}`)
})


console.log(creature)