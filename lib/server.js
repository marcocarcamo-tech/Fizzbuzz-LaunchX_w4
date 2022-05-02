const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});
app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});
app.get("/v1/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const amountInMission = ExplorerController.getExplorersAmountByMission(mission);
    const quantityObject = {};
    let missionKey = "mission";
    let quantityKey = "quantity";
    quantityObject[missionKey] = mission;
    quantityObject[quantityKey] = amountInMission;
    response.json(quantityObject);
});
app.get("/v1/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const usernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    const usernamesObject = {};
    let missionKey= "mission";
    let explorersKey = "explorers";
    usernamesObject[missionKey] = mission;
    usernamesObject[explorersKey] = usernamesInMission;
    response.json(usernamesObject);
});
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

