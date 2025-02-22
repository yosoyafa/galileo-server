const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const milkyWayPlanets = require('./db').milkyWayPlanets;

app.get('/planets', (req, res) => {
  res.json(milkyWayPlanets);
});

app.get('/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id); // Parse id as an integer
  const planet = milkyWayPlanets.find(p => p.id === planetId);

  if (planet) {
    res.json(planet);
  } else {
    res.status(404).json({ error: "Planet not found" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});