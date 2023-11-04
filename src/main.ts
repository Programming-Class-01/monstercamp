// import express from "express"
import { creatureBuilder } from "./creature.js";
// Reminder: We need at LEAST two views. 

// const app = express()
// const port = 3000

// app.get('/index.html', (_req, res) => {
//     res.send('index.html')
//   })
  
//   app.listen(port, () => {
//     console.log(`Hey man, I'm just listening on port ${port}`)
//   })
const creature = creatureBuilder()

console.log(creature)