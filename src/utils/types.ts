import type { AxiosResponse } from "axios";

export interface IApiUrls {
   getPlayers: string;
   getPlayer: string;
   getPredeletedPlayers: string;
   getPreselectedPlayers: string;
   getImage: string;
}

export interface IVideo {
   _id: string;
   video_name: string;
   video_url: string;
}

export interface IPassport {
   _id?: string;
   country: string;
}

export interface IAgency {
   agency_name: string;
   agency_email: string;
   agency_phone: string;
   agency_description: string;
}

export interface IPlayer {
   _id: string;
   __v: number;
   name: string;
   surname: string;
   email: string;
   country: string;
   birthdate: Date;
   image?: string;
   description: string;
   position: string;
   laterality: string;
   current_team: string;
   agency?: IAgency;
   height: number;
   weight: number;
   videos: IVideo[];
   passports: IPassport[];
   player_status?: string;
   uploaded: Date;
}

export interface IPlayersResponse extends AxiosResponse {
   data: IApiPlayersResponse;
}

export interface IPlayerResponse extends AxiosResponse {
   data: IApiPlayerResponse;
}

export interface IApiPlayerResponse {
   status: string;
   player: IPlayer;
}

export interface IApiPlayersResponse {
   status: "string";
   players: IPlayer[];
}

export interface IPlayerProps {
   player_status: string;
}
