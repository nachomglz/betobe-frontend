// IMPORT TYPES
import { IPlayerResponse, IPlayer } from "../../utils/types";
// Import hooks
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// IMPORT LIBRARIES
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faMale,
   faWeight,
   faShoePrints,
   faCrosshairs,
   faVideoCamera,
   faPassport,
   faEnvelope,
   faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
// IMPORT UTILS
import { api_urls } from "../../utils/config";
// IMPORT STYLESHEETS
import "./Player.css";

const Player = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const [player, setPlayer] = useState<IPlayer>();

   useEffect(() => {
      // Get the player from the API
      axios.get(api_urls.getPlayer + id).then(({ data }: IPlayerResponse) => {
         if (data.status === "success") {
            setPlayer(data.player);
         }
      });
   }, [id]);

   return (
      <div className="container">
         {player === null ? (
            <h2>Ups... Ese jugador no existe!</h2>
         ) : (
            <div className="player-container">
               <div
                  className="player-container__goback"
                  onClick={() => navigate(-1)}
               >
                  <FontAwesomeIcon icon={faArrowLeft} />
               </div>
               <div className="player-container__left">
                  <div className="player-container__left-image">
                     <img src={api_urls.getImage + player?.image} alt="" />
                  </div>
                  <div className="player-container__left-info">
                     <div className="player-container__left-info-name">
                        <p>{player?.name}</p>
                        <p>
                           <b>{player?.surname}</b>
                        </p>
                     </div>
                     <div className="player-container__left-info-email">
                        <p>
                           <FontAwesomeIcon icon={faEnvelope} />
                           {player?.email}
                        </p>
                     </div>
                     <div className="player-container__left-info-extra">
                        <div className="player__measures">
                           <p className="player__measures-height">
                              <FontAwesomeIcon icon={faMale} />
                              {player?.height}
                           </p>
                           <p className="player__measures-weight">
                              <FontAwesomeIcon icon={faWeight} />
                              {player?.weight}
                           </p>
                        </div>
                        <div className="player__caracteristics">
                           <p className="player__caracteristics-laterality">
                              <FontAwesomeIcon icon={faShoePrints} />
                              {player?.laterality}
                           </p>
                           <p className="player__caracteristics-position">
                              <FontAwesomeIcon icon={faCrosshairs} />
                              {player?.position}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="player-container__right">
                  <div className="player-container__right-info">
                     <div className="player-container__right-description">
                        <h3>Descripción</h3>
                        <p>{player?.description}</p>
                     </div>
                     <div className="player-container__right-videos">
                        <h3>Videos del jugador</h3>
                        {player?.videos.length === 0 ||
                        player?.videos === null ? (
                           <h4>Este jugador no ha subido ningún video...</h4>
                        ) : (
                           player?.videos.map((video, index) => (
                              <div className="player-video-item" key={index}>
                                 <FontAwesomeIcon icon={faVideoCamera} />
                                 <a
                                    href={
                                       video.video_url.indexOf("https") === -1
                                          ? "https://" + video.video_url
                                          : video.video_url
                                    }
                                    target={"_blank"}
                                    rel={"noreferrer"}
                                 >
                                    {video.video_name}
                                 </a>
                              </div>
                           ))
                        )}
                     </div>
                     <div className="player-container__right-passports">
                        <h3>Pasaportes del jugador</h3>
                        {player?.passports.length === 0 ||
                        player?.passports === null ? (
                           <h4>
                              Este jugador no ha subido ningún pasaporte...
                           </h4>
                        ) : (
                           player?.passports.map((passport, index) => (
                              <div className="player-passport-item" key={index}>
                                 <FontAwesomeIcon icon={faPassport} />
                                 {passport.country}
                              </div>
                           ))
                        )}
                     </div>
                     <div className="player-container__right-agency">
                        <h3>Agencia del jugador</h3>
                        <h4>Nombre</h4>
                        {(player?.agency?.agency_name === undefined ||
                           player?.agency?.agency_name === "" ||
                           player?.agency?.agency_name === null) && (
                           <>No se ha añadido un nombre de agencia</>
                        )}
                        {player?.agency?.agency_name}

                        <h4>Email</h4>
                        {(player?.agency?.agency_email === undefined ||
                           player?.agency?.agency_email === "" ||
                           player?.agency?.agency_email === null) && (
                           <>No se ha añadido un email de agencia</>
                        )}
                        {player?.agency?.agency_email}

                        <h4>Teléfono de contacto</h4>
                        {(player?.agency?.agency_phone === undefined ||
                           player?.agency?.agency_phone === "" ||
                           player?.agency?.agency_phone === null) && (
                           <>No se ha añadido un teléfono de agencia</>
                        )}
                        {player?.agency?.agency_phone}

                        <h4>Descripción</h4>
                        {(player?.agency?.agency_description === undefined ||
                           player?.agency?.agency_description === "" ||
                           player?.agency?.agency_description === null) && (
                           <>No se ha añadido una descripción de agencia</>
                        )}
                        {player?.agency?.agency_description}
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Player;
