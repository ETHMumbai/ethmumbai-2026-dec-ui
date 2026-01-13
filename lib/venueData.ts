import { StaticImageData } from "next/image";
import ConferenceImg from "../public/assets/conference/venue.jpg";
import HackathonImg from "../public/assets/hackathon/venue.jpg";

export interface VenueData {
  image: StaticImageData;
  name: string;
  address: string;
  directionLink: string;
  pincode?: string;
}

export const conferenceVenue: VenueData = {
  image: ConferenceImg,
  name: "Yashwantrao Chavan Centre",
  address: "General Jagannath Bhosle Road, Nariman Point,",
  directionLink: "https://maps.app.goo.gl/8sobRRBJxqF5ueqz6",
  pincode: "400021",
};

export const hackathonVenue: VenueData = {
  image: HackathonImg,
   name: "World Trade Center",
  address: "Ganesh Murti Nagar, Cuffe Parade,",
  directionLink: "https://maps.app.goo.gl/2eV6KSu1RPBnaFXaA",
  pincode: "400005",
};
