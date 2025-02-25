# Galileo API

This is a simple Node.js/Express.js API that provides basic information about planets in our solar system.

## Technologies Used

* **Node.js:** JavaScript runtime environment for server-side development.
* **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
* **npm (Node Package Manager):** Dependency management.
* **Git:** Version control.
* **Render:** Cloud platform for deployment.

## Endpoints

* **`/planets` (GET):** Returns a JSON array of all planets and their details.
* **`/planets/:id` (GET):** Returns the details of a specific planet based on its ID.
* **`/` (GET):** Returns a welcome message and a list of available endpoints.

## Planet Data

Each planet object in the API contains the following information:

* `id`: Unique identifier for the planet.
* `name`: Name of the planet.
* `picture`: An object containing URLs for the planet's icon and header images.
    * `icon`: URL of the icon image.
    * `header`: URL of the header image.
* `mass`: Mass of the planet.
* `diameter`: Diameter of the planet.
* `orbital_period`: Orbital period of the planet.
* `moons`: Number of moons.
* `description`: A short description of the planet.

