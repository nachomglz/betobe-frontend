import { IApiUrls } from "./types";

const api_urls: IApiUrls = {
   getPlayers: "http://localhost:8080/api/players/get",
   getPlayer: "http://localhost:8080/api/players/get/",
   getPredeletedPlayers: "http://localhost:8080/api/players/predeleted",
   getPreselectedPlayers: "http://localhost:8080/api/players/preselected",
   getImage: "http://localhost:8080/api/players/image/",
};

export { api_urls };
