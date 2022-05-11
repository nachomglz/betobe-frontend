// IMPORT TYPES
import { IPlayersResponse, IPlayer, IPlayerProps } from "../../utils/types";
// IMPORT REACT HOOKS
import { useEffect, useState } from "react";
// IMPORT LIBRARIES
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faMale,
   faWeight,
   faShoePrints,
   faCrosshairs,
   faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
// IMPORT UTILS
import { api_urls } from "../../utils/config";
import { Link } from "react-router-dom";
// IMPORT CSS
import "./Players.css";

const Players = ({ player_status }: IPlayerProps) => {
   // States
   const [loading, setLoading] = useState<boolean>(false);
   const [players, setPlayers] = useState<IPlayer[]>([]);
   const [showAvailability, setShowAvailability] = useState<boolean>(false);

   useEffect(() => {
      // Query api and get all the players
      setLoading(true);
      let url: string = "";
      if (player_status === "preselected") url = api_urls.getPreselectedPlayers;
      else if (player_status === "predeleted")
         url = api_urls.getPredeletedPlayers;
      else url = api_urls.getPlayers;

      axios
         .get(url)
         .then(({ data }: IPlayersResponse) => {
            setPlayers(data.players);
            setLoading(false);
         })
         .catch((err) => {
            Swal.fire("Oops...", "Ha ocurrido un error inesperado!", "error");
            setLoading(false);
         });
   }, [player_status]);

   return (
      <div className="container">
         {loading ? (
            <h1>Cargando jugadores...</h1>
         ) : (
            <div className="players-container">
               {players.length === 0 || players == null ? (
                  <div className="no-players-found-container">
                     <h2>No hay jugadores</h2>
                  </div>
               ) : (
                  players.map((player: IPlayer, index: number) => (
                     <div className="player" key={index}>
                        <img
                           src={
                              api_urls.getImage +
                              player.image?.replace("/", "slash")
                           }
                           alt="player"
                        />
                        <Link
                           to={`/player/${player._id}`}
                           className="player__info-btn"
                        >
                           <FontAwesomeIcon icon={faInfoCircle} />
                        </Link>
                        <p className="player__name">{player.name}</p>
                        <p className="player__surname">{player.surname}</p>
                        <div className="player__measures__caracteristics">
                           <div className="player__measures">
                              <p className="player__measures-height">
                                 <FontAwesomeIcon icon={faMale} />
                                 {player.height}
                              </p>
                              <p className="player__measures-weight">
                                 <FontAwesomeIcon icon={faWeight} />
                                 {player.weight}
                              </p>
                           </div>
                           <div className="player__caracteristics">
                              <p className="player__caracteristics-laterality">
                                 <FontAwesomeIcon icon={faShoePrints} />
                                 {player.laterality}
                              </p>
                              <p className="player__caracteristics-position">
                                 <FontAwesomeIcon icon={faCrosshairs} />
                                 {player.position}
                              </p>
                           </div>
                        </div>

                        <div className="player__options">
                           {player_status === "preselected" ? (
                              <button className="btn btn-transparent">
                                 Devolver
                              </button>
                           ) : player_status === "predeleted" ? (
                              <>
                                 <button className="btn btn-transparent">
                                    Devolver
                                 </button>
                                 <button className="btn btn-orange">
                                    Eliminar
                                 </button>
                              </>
                           ) : (
                              <>
                                 <button className="btn btn-transparent">
                                    Eliminar
                                 </button>
                                 <button className="btn btn-orange">
                                    Seleccionar
                                 </button>
                              </>
                           )}
                        </div>
                     </div>
                  ))
               )}
            </div>
         )}
      </div>
   );
};

export default Players;
