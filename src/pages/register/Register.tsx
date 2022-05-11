// IMPORT HOOKS
import { useState } from "react";
// IMPORT CUSTOM HOOKS
import useForm from "../../hooks/useForm";
import { IAgency, IPassport, IVideo } from "../../utils/types";
// IMPORT TYPES
// IMPORT CSS
import "./Register.css";

const Register = () => {
   const [player, updatePlayer, updateAgency]: any = useForm();
   const [agency, setAgency] = useState<{}>();
   const [passports, setPassports] = useState<IPassport[]>([]);
   const [videos, setVideos] = useState<IVideo[]>([]);

   const handleSubmit = (e: any): void => {
      e.preventDefault();

      player;

      console.log(player);
   };

   const agencyChange = (e: any) => {
      setAgency((agency) => ({ ...agency, [e.target.name]: e.target.value }));
      updateAgency(agency);
   };

   const passportChange = (e: any) => {
      setPassports([{ country: e.target.value as string }, ...passports]);
   };

   return (
      <div className="container">
         <div className="register-container">
            <h2>Añade tu información</h2>
            <form className="register-form">
               <div className="register-form__field">
                  <div className="register-form__field-name">
                     <label htmlFor="name">Nombre:</label>
                     <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={updatePlayer}
                     />
                  </div>
                  <div className="register-form__field-surname">
                     <label htmlFor="surname">Apellidos:</label>
                     <input
                        type="text"
                        name="surname"
                        id="surname"
                        onChange={updatePlayer}
                     />
                  </div>
               </div>
               <div className="register-form__field">
                  <div className="register-form__field-email">
                     <label htmlFor="email">Correo electrónico:</label>
                     <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={updatePlayer}
                     />
                  </div>
                  <div className="register-form__field-country">
                     <label htmlFor="country">País:</label>
                     <input
                        type="text"
                        name="country"
                        id="country"
                        onChange={updatePlayer}
                     />
                  </div>
               </div>
               <div className="register-form__field">
                  <div className="register-form__field-birthdate">
                     <label htmlFor="birthdate">Fecha de nacimiento:</label>
                     <input
                        type="date"
                        name="birthdate"
                        id="birthdate"
                        onChange={updatePlayer}
                     />
                  </div>
                  <div className="register-form__field-image">
                     <label htmlFor="image">Seleccione una imagen</label>
                     <input
                        type="file"
                        name="image"
                        id="image"
                        style={{
                           display: "none",
                        }}
                        onChange={updatePlayer}
                     />
                  </div>
               </div>
               <div className="register-form__field">
                  <div className="register-form__field-description">
                     <label htmlFor="description">
                        Descripción del jugador:
                     </label>
                     <textarea
                        name="description"
                        id="description"
                        onChange={updatePlayer}
                     ></textarea>
                  </div>
               </div>
               <div className="register-form__field">
                  <div className="register-form__field-position">
                     <label htmlFor="position">Posición de campo:</label>
                     <select
                        name="position"
                        id="position"
                        onChange={updatePlayer}
                     >
                        <option value="portero">Portero</option>
                        <option value="defensa">Defensa</option>
                        <option value="centrocampista">Centrocampista</option>
                        <option value="delantero">Delantero</option>
                     </select>
                  </div>
                  <div className="register-form__field-laterality">
                     <label htmlFor="laterality">Lateralidad:</label>
                     <select
                        name="laterality"
                        id="laterality"
                        onChange={updatePlayer}
                     >
                        <option value="diestro">Diestro</option>
                        <option value="zurdo">Zurdo</option>
                        <option value="ambidiestro">Ambidiestro</option>
                     </select>
                  </div>
                  <div className="register-form__field-current_team">
                     <label htmlFor="current_team">
                        Equipo actual(si tiene):
                     </label>
                     <input
                        type="text"
                        name="current_team"
                        id="current_team"
                        onChange={updatePlayer}
                     />
                  </div>
               </div>
               <div className="register-form__field">
                  <div className="register-form__field-height">
                     <label htmlFor="height">Altura:</label>
                     <input
                        type="number"
                        name="height"
                        id="height"
                        step={0.01}
                        onChange={updatePlayer}
                     />
                  </div>
                  <div className="register-form__field-weight">
                     <label htmlFor="weight">Peso:</label>
                     <input
                        type="number"
                        name="weight"
                        id="weight"
                        step={0.01}
                        onChange={updatePlayer}
                     />
                  </div>
               </div>
               <div className="register-form__field">
                  <div className="register-form__field-agency">
                     <div className="register-form__field-agency-name">
                        <label htmlFor="agency_name">
                           Nombre de la agencia:
                        </label>
                        <input
                           type="text"
                           name="agency_name"
                           id="agency_name"
                           onChange={agencyChange}
                        />
                     </div>
                     <div className="register-form__field-agency-email">
                        <label htmlFor="agency_email">
                           Email de la agencia:
                        </label>
                        <input
                           type="text"
                           name="agency_email"
                           id="agency_email"
                           onChange={agencyChange}
                        />
                     </div>
                     <div className="register-form__field-agency-phone">
                        <label htmlFor="agency_phone">
                           Teléfono de la agencia:
                        </label>
                        <input
                           type="text"
                           name="agency_phone"
                           id="agency_phone"
                           onChange={agencyChange}
                        />
                     </div>
                     <div className="register-form__field-agency-description">
                        <label htmlFor="agency_description">
                           Descripción de la agencia:
                        </label>
                        <input
                           type="text"
                           name="agency_description"
                           id="agency_description"
                           onChange={agencyChange}
                        />
                     </div>
                  </div>
               </div>
               <div className="register-form__field">
                  <div className="register-form__field-videos">
                     <div className="register-form__field-videos-video">
                        <div className="register-form__field-videos-video-video_name">
                           <label htmlFor="video_name">Nombre del video:</label>
                           <input
                              type="text"
                              name="video_name"
                              id="video_name"
                              onChange={updatePlayer}
                           />
                        </div>
                        <div className="register-form__field-videos-video-video_url">
                           <label htmlFor="video_url">Enlace al video:</label>
                           <input
                              type="text"
                              name="video_url"
                              id="video_url"
                              onChange={updatePlayer}
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="register-form__field">
                  <div className="register-form__field-passports">
                     <div className="register-form__field-videos-passport">
                        <label htmlFor="passport_country">
                           País del pasaporte:
                        </label>
                        <input
                           type="text"
                           name="passport_country"
                           id="passport_country"
                           onChange={updatePlayer}
                        />
                     </div>
                  </div>
               </div>
               <div className="register-form__field register-button-field">
                  <button
                     type="submit"
                     className="btn btn-orange"
                     onClick={handleSubmit}
                  >
                     Enviar
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;
